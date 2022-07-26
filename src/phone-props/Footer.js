import React, { Component } from 'react'
import './footer.css'
export class Footer extends Component {
  render() {
    return (
       <div className="footer-dark">
 
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 item">
          <h3>Sản Phẩm</h3>
          <ul>
            <li><a href="#">Giày</a></li>
            <li><a href="#">Quần Áo</a></li>
            <li><a href="#">Phụ Kiện</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 item">
          <h3>Bộ Sưu Tập</h3>
          <ul>
            <li><a href="#">Giày Ultraboost</a></li>
            <li><a href="#">Giày Stan Smith</a></li>
            <li><a href="#">Predator</a></li>
          </ul>
        </div>
        <div className="col-md-6 item text">
          <h3>adidas Việt Nam</h3>
          <p>Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB.adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to supportcreators. Improve their game. Their lives. And change the world.</p>
        </div>
        <div className="col item social"><a href="#"><i className="icon ion-social-facebook" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-instagram" /></a></div>
      </div>
      <p className="copyright">Company Name © 2018</p>
    </div>
 
</div>

    )
  }
}

export default Footer