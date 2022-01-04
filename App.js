import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutpage from "./Aboutpage";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/Aboutpage" exact component={Aboutpage} />
        <Route path="/Dashboard" exact component={Dashboard} />
     </Routes> 
     </BrowserRouter>
    </div>
  );
};

export default App;
