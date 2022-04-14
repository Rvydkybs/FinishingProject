import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Provider, getState } from "react-redux";
import { createStore } from "redux";
import Reducers from "./Reducers";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAtuthLoading] = useState(true);

  // <parent><children/></parent>
  //  <parent children=/>

  useEffect(() => {
    AsyncStorage.getItem("@USER").then((userSession) => {
      userSession && //kullanıcı varsa
        setUser(JSON.parse(userSession));
      setIsAtuthLoading(false);
    });
  }, []);

  const store = createStore(Reducers, { user, isAuthLoading });

  return <Provider store={store}>{children}</Provider>;
}
