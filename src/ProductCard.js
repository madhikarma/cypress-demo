import logo from './logo.svg';


import './ProductCard.css';
import React from 'react';

class ProductCard extends React.Component {
  
  // Initialiser Function
  constructor(props) {
    super(props);
    this.state = { ...props }
  }

  isOnSale() {
    return this.state.salePrice != null
  }

  renderIsOnSaleLabel() {
    if (this.isOnSale()) {
      return <p>SALE</p>
    } 
    return null
  }

  // Functions (React framework render function)
  render() {
    return (
      <div className="productCard">
        <a href={this.state.productURL}>
          <img src={this.state.image} width="200" height="200" />
        </a>
        <p>{this.state.name}</p>
        <div className="priceContainer">
          <p className={ this.isOnSale() ? 'oldPrice' : 'regularPrice'}>{this.state.price}</p>
          <p className='salePrice'>{this.state.salePrice}</p>
        </div>
        {this.renderIsOnSaleLabel()}
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default ProductCard;
