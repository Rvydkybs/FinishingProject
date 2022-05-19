import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Loading from "./Components/Loading/Loading";

import AuthNavigator from "./route/AuthNavigator";
import AppNavigator from "./route/AppNavigator";
import { Storage } from "./utils/Storage";

export default function Router() {
  const userSession = useSelector((s) => s.user);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getUser = async () => {
    const user = await Storage.GetItem("user");
    dispatch({ type: "SET_USER", payload: { user: user } });
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

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
