import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import LoginProvider from "./context/auth/login";
import ThemeProvider from "./context/theme/theme";
import FormModal from "./components/auth/login";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ThemeProvider>
      <LoginProvider>
        <div className="App"></div>;
        <button onClick={() => setModalShow(true)}>TEST</button>
        <FormModal show={modalShow} onHide={() => setModalShow(false)} />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
