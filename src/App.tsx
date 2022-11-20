import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import KeyboardTestPage from "./pages/KeyboardTestPage";
import SpeedTypePage from "./pages/SpeedTypePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight-main text-white">
      <NavigationBar />
      <div className="grow mx-auto pt-10 px-12 w-full">
        <Routes>
          <Route path="/" element={<SpeedTypePage />} />
          <Route path="/keyboard-test" element={<KeyboardTestPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
