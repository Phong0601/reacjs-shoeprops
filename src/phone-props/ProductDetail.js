import React, { Component } from "react";

export class ProductDetail extends Component {
  // renderDetail = () => {
  //   const detailHTMLs = this.props.prod.map((item) => {
  //     const { id, name, price, image, description } = item;
  //     return (
        
  //     )
  //   });
  //   return detailHTMLs;
  // };
  render() {

    const { id,quantity, image, description,name,alias,shortDescription } = this.props.detail;
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <div key={id} className="row">
         <div className="col-5">
           <h1 className="text-danger">{name}</h1>
           <img src={image} className="w-100" />
           <p className="text-center p-2 fw-bolder">{description}</p>
         </div>
         <div className="col-7">
           <table className="h-100 table table-light table-striped table-hover">
             <thead>
               <tr>
                 <th colSpan={2} ><h1>THÔNG TIN CHI TIẾT</h1></th>
                 
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>Sản Phẩm</td>
                 <td>{alias}</td>
               </tr>
               <tr>
                 <td>Stock</td>
                 <td>{quantity}</td>
               </tr>
               <tr>
                 <td>Mô Tả </td>
                 <td>{description}</td>
               </tr>
               <tr>
                 <td>Thông Tin</td>
                 <td>{shortDescription}</td>
               </tr>
           
             </tbody>
           </table>
         </div>
       </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={()=>{this.props.addToCart(this.props.detail)}} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default ProductDetail;
