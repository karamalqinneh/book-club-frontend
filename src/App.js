import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LoginProvider from "./context/auth/login";
import ThemeProvider from "./context/theme/theme";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <ThemeProvider>
      <LoginProvider>
        <Header />
        <Footer />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
