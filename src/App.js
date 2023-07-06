import React from "react";
import "./App.css";
import "material-icons/iconfont/material-icons.css";
import {
  MaterialIcon,
  Nav,
  PageLink,
  SideBar,
  RepositoryPage,
  EdgeCrm,
} from "./components/index";
import styled from "@emotion/styled";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  TabTest,
  TabsOverview,
} from "../src/components/index";
import Form from "./components/pages/Form";
import AllRepository from "./components/pages/AllRepository";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <SideBar />
        <Routes>
          <Route exact path="/Form" element={<Form />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/repository/1576"
            element={<RepositoryPage />}
          ></Route>
          <Route exact path="/repository" element={<AllRepository />}></Route>
          <Route
            exact
            path="/tabpaneloverview"
            element={<TabsOverview />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
