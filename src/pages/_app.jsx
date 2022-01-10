import "styles/global.css";
import "styles/fontFaces.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://cms.ariscorp.de/graphql?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;
