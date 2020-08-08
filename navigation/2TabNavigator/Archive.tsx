import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ArchiveScreen } from "../../screens/ArchiveScreen";
import { TabThreeParamList } from "../types";

const TabTwoStack = createStackNavigator<TabThreeParamList>();

export const Archive = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{ headerTitle: "Archive" }}
      />
    </TabTwoStack.Navigator>
  );
};
