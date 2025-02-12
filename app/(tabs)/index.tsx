import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginView from "./components/LoginView";
import SignupView from "./components/SignupView";

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Signup" component={SignupView} />
    </Stack.Navigator>
  );
}
