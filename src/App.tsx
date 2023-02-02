import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";

import { client } from "./lib/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
