import React, { useState, useReducer } from "react";
import { StyleSheet, TextInput, NativeSyntheticEvent } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image, Input, Text, Divider } from "react-native-elements";
import { Container } from "../ui/Container";

export const NotTodayScreen = () => {
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState({
    value: ""
  });

  const CustomTextInput = () => {
    return (
      <TextInput
        onBlur={() => {
          console.log(isError);
          const isEmpty = input.value === "" ? true : false;
          setIsError(isEmpty);
        }}
      />
    );
  };
  // const error = input.touched && input.value === "";

  return (
    <Container>
      <Text>Hello my wonder land</Text>
      <Divider style={{ backgroundColor: "blue" }} />
      <Image
        source={{
          uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
        }}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input placeholder="BASIC INPUT" />

      <Input
        placeholder="INPUT WITH ERROR MESSAGE" // errorStyle={{ color: "red" }}
        value={input.value}
        onChangeText={value => setInput({ value })}
        onBlur={() => setIsError(input.value === "")}
        InputComponent={TextInput}
      />
      {isError && <Text>error</Text>}
    </Container>
  );
};
