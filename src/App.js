import React from "react";
import { BrowserRouter} from "react-router-dom";
import RouterApp from "./router";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
