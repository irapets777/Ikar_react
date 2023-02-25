import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      {/* <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
     
      <Route path="/student" element={<StudentPage />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route>
      <Route path="/" element={<StudentPage />}></Route> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default RouterApp;
