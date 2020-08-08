import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./hooks/useCachedResources";
import { useColorScheme } from "./hooks/useColorScheme";
import { Navigation } from "./navigation";
import { CustomThemeProvider } from "./providers/CustomThemeProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://right-goldfish-91.hasura.app/v1/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <CustomThemeProvider>
            <Navigation />
          </CustomThemeProvider>
        </ApolloProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};

export default App;
