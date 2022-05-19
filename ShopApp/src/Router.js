import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Loading from "./Components/Loading/Loading";

import AuthNavigator from "./route/AuthNavigator";
import AppNavigator from "./route/AppNavigator";

export default function Router() {
  const userSession = useSelector((s) => s.user);
  const isLoading = useSelector((s) => s.isAuthLoading);

  return (
    <NavigationContainer independent={true}>
      {isLoading ? (
        <Loading />
      ) : !userSession ? (
        <AuthNavigator />
      ) : (
        <AppNavigator />
      )}
    </NavigationContainer>
  );
}
