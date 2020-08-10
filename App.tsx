import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./hooks/useCachedResources";
import { useColorScheme } from "./hooks/useColorScheme";
import { Navigation } from "./navigation";
import { CustomThemeProvider, theme } from "./providers/CustomThemeProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components/native";

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
            <ThemeProvider theme={theme}>
              <Navigation />
            </ThemeProvider>
          </CustomThemeProvider>
        </ApolloProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};

export default App;
