import React from "react";
import { ActivityIndicator } from "react-native";
import { ListItem, Text, Button } from "react-native-elements";
import { useQuery } from "@apollo/client";
import { GET_TODOS } from "../graphql/mutations/todo";
import { Container, Title } from "../ui";
import { useNavigation } from "@react-navigation/native";

export const TodoDetailScreen = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  const navigation = useNavigation();

  if (loading) return <ActivityIndicator />;
  if (error)
    return (
      <Container>
        <Text>エラー</Text>
        <Button
          title="Go to home screen!"
          onPress={() => navigation.replace("Today")}
          type="clear"
        />
      </Container>
    );

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
