import React from "react";
import RoutesApp from "./Router/Router";
import { AuthProvider } from "./context/auth";
import GlobalStyle from "./styles/global";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;