import { ReactNode } from "react";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { MP } from "./types";
import { getSpacing } from "./utils";

type Box = Partial<{
  align: string;
  primary: boolean;
  flex: boolean;
}> &
  MP &
  Readonly<ViewProps> &
  Readonly<{ children?: ReactNode }>;

export const Box = styled.View<Box>`
  display: flex;
  flex-direction: row;

  ${props => props.primary && { border: "1px solid blue" }}

  ${props => props.flex && { display: "flex" }}

  ${props => getSpacing(props)}
`;
