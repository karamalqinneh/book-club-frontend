import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import LoginProvider from "./context/auth/login";
import ThemeProvider from "./context/theme/theme";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./components/landing-page/landingPage";
import Library from "./components/Library/main";
import MainRooms from "./components/rooms/main";
import Room from "./components/rooms/discussion-rooms/room";

function App() {
  return (
    <ThemeProvider>
      <LoginProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/discussions" element={<MainRooms />} />
          <Route path="/room/:room_id" element={<Room />} />
        </Routes>
        <Footer />
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
