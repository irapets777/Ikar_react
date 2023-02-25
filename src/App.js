import React from "react";
import { BrowserRouter} from "react-router-dom";
import RouterApp from "./router";
import NavBar from "./components/UI/navBar/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
