import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o1gz9a04g701xx47e82i3m/master",
  cache: new InMemoryCache(),
});
