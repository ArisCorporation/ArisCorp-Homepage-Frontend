import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
}

const localRestLink = new RestLink({ uri: '/api/' })

export const client = new ApolloClient({
  ssrMode: true,
  uri: 'https://cms.ariscorp.de/graphql?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export const LocalApiClient = new ApolloClient({
  ssrMode: true,
  link: localRestLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default client
