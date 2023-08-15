import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

        const payload = {
          email: credentials.email,
          password: credentials.password,
        }
        const userTokensRes = await fetch('https://cms.ariscorp.de/auth/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
          },
        })
        const userTokens = await userTokensRes.json()
        const userDetailsRes = await fetch('https://cms.ariscorp.de/users/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
            Authorization: `Bearer ${userTokens?.data?.access_token}`,
          },
        })
        const userDetails = await userDetailsRes.json()

        if (
          !userTokens ||
          !userTokens.data ||
          !userDetails ||
          !userDetails.data
        ) {
          throw new Error('Next auth failed')
        }
        const user = {
          id: userDetails.data.id,
          email: userDetails.data.email,
          firstName: userDetails.data.first_name,
          lastName: userDetails.data.last_name,
          accessToken: userTokens.data.access_token,
          refreshToken: userTokens.data.refresh_token,
        }
        // const allowedRoles = [
        //   "53ed3a6a-b236-49aa-be72-f26e6e4857a0",
        //   "d9b59a92-e85d-43e2-8062-7a1242a8fce6",
        // ];
        // Only allow admins and sales
        // if (!allowedRoles.includes(user.role)) {
        //   throw createError({
        //     statusCode: 403,
        //     statusMessage: "Not allowed",
        //   });
        // }
        return user
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'jhcfkdcfjskncfhjscmfsmjcfsmjofc',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        console.warn('JWT callback', { token, user, account })
        return {
          ...token,
          ...user,
        }
      }
      // Handle token refresh before it expires of 15 minutes
      if (token.accessTokenExpires && Date.now() > token.accessTokenExpires) {
        console.warn('Token is expired. Getting a new')
        return refreshAccessToken(token)
      }
      return token
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        ...token,
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  }
}

export default (req, res) => NextAuth(req, res, options)
