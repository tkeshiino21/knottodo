import { Header } from "react-native-elements";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DrawerActions } from "@react-navigation/native";
import Logo from "../ui-group/Logo";

const SettingButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Ionicons
        name="ios-settings"
        size={30}
        color="#ffffff"
        style={{ marginBottom: -3 }}
      />
    </TouchableOpacity>
  );
};

export const CustomHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <Header
      placement="left"
      centerComponent={<Logo />}
      rightComponent={<SettingButton />}
    />
  );
};
