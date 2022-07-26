import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  render() {
    return (
      <div>
        <ProductItem addToCart={this.props.addToCart} selectItem={this.props.selectItem} prod={this.props.prod}/>
      </div>
    )
  }
}

export default ProductList