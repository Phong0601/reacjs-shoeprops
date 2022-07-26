import React, { Component } from "react";

export class ShoppingCart extends Component {
  closeCart = React.createRef();
  renderCart = () => {
    const cartHTMLs = this.props.add.map((item, index) => {
      const { id, image, name, price } = item.producta;
      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>
            <img style={{ width: "50px" }} src={image} />
          </td>
          <td>{name}</td>
          <td>
            <button
              onClick={() => {
                this.props.delelteCartQty(id);
              }}
              className="btn btn-info"
            >
              -
            </button>
            <span className="fs-5">{item.qty}</span>
            <button
              onClick={() => {
                this.props.addToCart(item.producta);
              }}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{price * item.qty}</td>
          <td>
            <button
              onClick={() => {
                this.props.delelteCart(id);
              }}
              className="btn btn-outline-danger"
            >
              &nbsp;Xóa&nbsp;
            </button>
          </td>
        </tr>
      );
    });
    return cartHTMLs;
  };
  render() {
    return (
      <div
        className="modal fade"
        id="shoppingCart"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Shopping Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-light table-striped table-hover ">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Hình Ảnh</th>
                    <th>Sản Phẩm</th>
                    <th>S.Lượng</th>
                    <th>Giá</th>
                    <th>Tổng</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                ref={this.closeCart}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  this.props.clearCart();
                  this.closeCart.current.click();
                }}
                type="button"
                className="btn btn-primary"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
