import "./App.css";
import ThemeProvider from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <div className="App"></div>;
    </ThemeProvider>
  );
}

export default App;
