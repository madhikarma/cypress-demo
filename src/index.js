import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductCard from './ProductCard';
import nikeJordansSneakerImage from './images/Jordanlow2_1400x.jpg';
import nikeZoomVistaGrindImage from './images/Nike-Zoom-X-Vista-Grind-Sneaker.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App value=''/> */}
    <ProductCard productURL="https://www.nike.com" image={nikeJordansSneakerImage} name="Nike Air Jordans" description="Some description about these Nike Jordan sneakers." price="£39.99" salePrice="£35.99"/>
    <ProductCard productURL="https://www.nike.com" image={nikeZoomVistaGrindImage} name="Nike Zoom Vista" description="Some description about these Nike Zoom Vista Grind sneakers." price="£69.99" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
