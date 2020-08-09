import React from "react";
import { ActivityIndicator } from "react-native";
import { ListItem, Text, Button } from "react-native-elements";
import { useQuery } from "@apollo/client";
import { GET_ALL_TODOS } from "../graphql/mutations/todo";
import { Container, Title } from "../ui";
import { useNavigation } from "@react-navigation/core";
import { ErrorMessage } from "../ui-group/ErrorMessage";
import Logo from "../ui-group/Logo";

export const TodayScreen = () => {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);
  const navigation = useNavigation();

  if (loading) return <ActivityIndicator />;
  if (error)
    return <ErrorMessage navigation={() => navigation.replace("TodoDetail")} />;

  return (
    <Container>
      <Title>Hello my crazy voice</Title>
      {data.todo.map((datum: any) => (
        <ListItem
          key={datum.id}
          title={<Text>{datum.title}</Text>}
          bottomDivider
        />
      ))}
      <Logo />
      <Button
        title="Go to home screen!"
        onPress={() => navigation.replace("TodoDetail")}
        type="clear"
      />
    </Container>
  );
};
