import "styles/global.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import NextNProgress from "nextjs-progressbar";

export const client = new ApolloClient({
  uri: "https://cms.ariscorp.de/graphql?access_token=ihGAYzxCs1LWxIGBSTWbx8w3cd7oTNCobhZdmr",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ApolloProvider client={client}>
      <NextNProgress color="#00ffe8" height={2} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
