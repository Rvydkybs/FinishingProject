import Router from "./Router";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import React from "react";
import Profile from "./Pages/Profile/Profile";
import Add from "./Pages/Add/Add";

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
