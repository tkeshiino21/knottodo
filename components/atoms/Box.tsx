import { ReactNode } from "react";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { MP } from "./types";

type Box = Partial<{
  invalid: boolean;
  align: string;
  primary: boolean;
}> &
  MP &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

const getTagColor = (props: Box) => {
  if (props.align === "center") {
    return `
      flex: 1;
      align-items: center;
      justify-content: center;
    `;
  } else if (props.invalid) {
    return `
      color: blue;
    `;
  } else if (props.primary) {
    return `
      color: yellow;
    `;
  }
};

export const Box = styled.View<Box>`
  border: ${props => (props.invalid ? "red" : "blue")};

  ${props => props.primary && { border: "1px solid blue" }}

  ${props => getTagColor(props)}
`;
