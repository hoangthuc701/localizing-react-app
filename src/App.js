import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.scss";

const App = () => (
  <>
    <Navbar />
    <main role="main" className="pt-5 px-3">
      <Header />
    </main>
  </>
);

export default App;
