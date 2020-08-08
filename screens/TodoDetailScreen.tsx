import React from "react";
import { ActivityIndicator } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/mutations/todo";
import { Container, Title } from "../components/atoms";

export const TodoDetailScreen = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>エラー</Text>;

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
    </Container>
  );
};
