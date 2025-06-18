import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Home";
import About from "../src/About";
import CreateProduct from "../src/poduct/CreateProduct";
import ProductDetils from "../src/poduct/ProductDetils";
import Product from "../src/poduct/Product";
import NotFound from "../src/NotFound";
import CryptoDetail from "../src/CryptoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/createproduct" element={<CreateProduct />}></Route>
        <Route path="/productDetils/:id?" element={<ProductDetils />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cryptodetail/:cryptoSympol/:id?" element={<CryptoDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
