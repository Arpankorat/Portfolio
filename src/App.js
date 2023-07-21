import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./views/LandingPage";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <Footer />
      {/* <Navbar/>
      <Content/> */}
    </div>
  );
}

export default App;
