import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LoginProvider from "./context/auth/login";
import ThemeProvider from "./context/theme/theme";
import Header from "./components/header/header";

function App() {
  return (
    <ThemeProvider>
      <LoginProvider>
        <Header />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
