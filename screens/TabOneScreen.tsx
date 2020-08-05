import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { ThemeContext, ListItem } from "react-native-elements";

import { useQuery } from "@apollo/client";
import { GET_TODOS, GET_ALL_TODOS } from "../graphql/mutations/todo";

export const TabOneScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_ALL_TODOS);

  if (loading) return <div />;
  if (error) return <div />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello my crazy voice</Text>
      {console.log(data)}
      {data.todo.map((datum: any) => (
        <ListItem
          key={datum.id}
          title={<Text>{datum.title}</Text>}
          bottomDivider
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
