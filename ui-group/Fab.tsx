import React, { FC } from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";

const Fab: FC = ({ children }) => {
  const FabButton: FC = ({ children }) => {
    return <TouchableOpacity>{children}</TouchableOpacity>;
  };

  return (
    <Animated.View style={styles.fab}>
      <TouchableOpacity>{children}</TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fab: {
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 1,
    shadowColor: "white",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 25,
    position: "absolute",
    bottom: 8,
    backgroundColor: "purple"
  },
  container: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 60,
    height: 60,
    alignItems: "center"
  },
  iconStyle: {
    color: "white",
    fontSize: 20,
    lineHeight: 27
  },
  buttonStyle: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "purple"
  }
});
