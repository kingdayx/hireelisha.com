import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import NavBar from "./components/NavBar";
import PortFolio from "./components/Portfolio/PortFolio";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div id="about">
        <About />
        <Skills />
      </div>
      <PortFolio />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
