import React, { useEffect } from "react";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import KeyboardTestPage from "./pages/KeyboardTestPage";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-midnight-main text-white">
      <NavigationBar />
      <KeyboardTestPage />
      <Footer />
    </div>
  );
}

export default App;
