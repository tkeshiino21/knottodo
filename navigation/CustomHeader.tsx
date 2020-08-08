import { Header } from "react-native-elements";
import { ThemeContext, Colors } from "react-native-elements";
import React, { FC, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/native";

const SettingButton = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors as Colors;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Ionicons
        name="ios-settings"
        size={30}
        color={colors.grey0}
        style={{ marginBottom: -3 }}
      />
    </TouchableOpacity>
  );
};

export const CustomHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: title, style: { color: "#fff" } }}
      rightComponent={<SettingButton />}
    />
  );
};
