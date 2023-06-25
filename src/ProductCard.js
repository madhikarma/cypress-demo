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

  // Functions (React framework render function)
  render() {
    return (
        <div className="productCard" data-cy="product-card">
          <a href={this.state.productURL} className='productCardImageLink' data-cy="product-card-image-link">
            <img src={this.state.image} width="200" height="200" className='productCardImage' data-cy="product-card-image" />
          </a>
          <p className='productCardName' data-cy="product-card-name">{this.state.name}</p>
          <div className='productCardPriceContainer'>
            <p className={ this.isOnSale() ? 'productCardOldPrice' : 'productCardRegularPrice'} data-cy="product-card-price">{this.state.price}</p>
            <p className='productCardSalePrice' data-cy="product-card-sale-price">{this.state.salePrice}</p>
          </div>
          { 
            this.isOnSale() ? <p className='productCardSaleLabel' data-cy="product-card-sale-label">SALE</p> : null
          }
          <p className='productCardDescription' data-cy="product-card-description">{this.state.description}</p>
        </div>
    )
  }
}

export default ProductCard;
