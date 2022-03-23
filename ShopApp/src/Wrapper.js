import Router from "./Router";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import React from "react";

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
