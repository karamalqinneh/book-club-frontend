import React, { useState } from "react";

export const ThemeContext = React.createContext();
export default function ThemeProvider(props) {
  const [mode, setMode] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#f09d51");
  const [mainWhite, setMainWhite] = useState("#fff");
  const [mainBlack, setMainBlack] = useState("#222");
  const [mainGrey, setMainGrey] = useState("#ececec");
  const [mainSpacing, setMainSpacing] = useState("0.1rem");
  const [mainTransition, setMainTransition] = useState("all 0.3s linear");

  function toggleMode() {
    let newMode = mode == "dark" ? "light" : "dark";
    setMode(newMode);
  }

  const state = {
    primaryColor,
    mainWhite,
    mainBlack,
    mainGrey,
    mainSpacing,
    mainTransition,
  };

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}
