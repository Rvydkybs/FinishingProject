import Router from "./Router";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import React from "react";
import Profile from "./Pages/Profile/Profile";

export default () => {
  return (
    <AuthProvider>
      <Router />
      <Profile />
    </AuthProvider>
  );
};
