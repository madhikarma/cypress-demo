import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductCard from "./ProductCard";
import image from "./images/shoes/nike-air-jordan.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Note. UNCOMMENT BELOW TO RENDER / LOAD THE APP/LOGIN FORM UI */}
    {/* <App value=''/> */}

    {/* Note. UNCOMMENT BELOW TO RENDER / LOAD THE PRODUCT CARD UI */}
    {/* <ProductCard
      productURL="https://www.nike.com"
      image={image}
      name="Nike Air Jordans"
      description="Some description about these Nike Jordan sneakers."
      price="£39.99"
      salePrice="£35.99"
    /> */}
    {/* Note. UNCOMMENT BELOW TO RENDER / LOAD THE APP/LOGIN FORM UI AND PRODUCT CARD UI WITH NAVIGATION */}
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<App value="" />}
        />
        <Route
          path="/products/"
          element={
            <ProductCard
              productURL="https://www.nike.com"
              image={image}
              name="Nike Air Jordans"
              description="Some description about these Nike Jordan sneakers."
              price="£39.99"
              salePrice="£35.99"
            />
          }
        />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
