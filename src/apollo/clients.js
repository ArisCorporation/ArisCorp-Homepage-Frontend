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
  uri: process.env.NEXT_PUBLIC_GRAPH_SERVER,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  // headers: {
  //   authorization: 'Bearer ',
  // },
})

export const LocalApiClient = new ApolloClient({
  ssrMode: true,
  link: localRestLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default client
