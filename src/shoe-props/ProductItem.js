import React, { Component } from "react";
import "./ProductItem.css";
export class ProductItem extends Component {
  renderItem = () => {
    const itemHTMLs = this.props.prod.map((item) => {
      const { id, name, price, image } = item;
      return (
        <div key={id} className="col-4 p-3">
          <div className="card p-3">
            <img onClick={()=>{this.props.selectItem(item)}} data-bs-toggle="modal" data-bs-target="#exampleModal" src={image} className="img card-img-top py-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h5 className="text-danger card-title">{price}$</h5>
            </div>

            <div className="card-body">
              <button onClick={()=>{this.props.selectItem(item)}}  data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-info me-2 ">Detail</button>
              <button onClick={()=>{this.props.addToCart(item)}} className="btn btn-dark ms-2">Add to Cart</button>
            </div>
          </div>
        </div>
      );
    });
    return itemHTMLs;
  };
  render() {
    return <div className="row">{this.renderItem()};</div>;
  }
}

export default ProductItem;
