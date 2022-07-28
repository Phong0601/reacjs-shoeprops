import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

export class HomePhone extends Component {
  // products = [
  //   {
  //     id: 1,
  //     name: "Xiaomi Mi 10 Pro",
  //     screen: "Super AMOLED,1080 x 2340 pixels,6.67 inches",
  //     system: "Android 10.0; MIUI 11",
  //     frontCamera: "20 MP",
  //     rearCamera: "108 MP + 8 MP + 12 MP + 20 MP",
  //     ram: "8 GB",
  //     rom: "256 GB",
  //     price: "16.790.000",
  //     priced: 16790000,
  //     description:
  //       "Xiaomi Mi 10 Pro (8GB|256GB) có thiết kế bóng bẩy với  màn hình tràn viền 6.67 inches, cụm camera 108MP, chip Snapdragon 865 mạnh mẽ và dung lượng pin 4500mAh.",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product//x/i/xiaomi-mi-10-pro-5g.jpg",
  //     type: "Xiaomi",
  //   },
  //   {
  //     id: 2,
  //     name: "Xiaomi Redmi 10 2022",
  //     screen: "IPS LCD,Full HD+ (1080 x 2400 Pixels),6.5 inches ",
  //     system: "Android 11 - MIUI 12.5",
  //     frontCamera: "8 MP",
  //     rearCamera: "Chính 50 MP & Phụ 8 MP, 2 MP, 2 MP",
  //     ram: "4 GB",
  //     rom: "128 GB",
  //     price: "3.890.000",
  //     priced: 3890000,
  //     description:
  //       "Xiaomi Redmi 10 2022 có màn hình 6.5 inch. Cấu hình ổn định, mượt mà với chipset MediaTek Helio G88. Ngoài ra, máy còn có cụm camera với cảm biến 50MP, phù hợp với mọi đối tượng người dùng với mức giá tầm trung vừa túi tiền hầu hết tất cả mọi người.",
  //     image:
  //       "https://cdn.tgdd.vn/Products/Images/42/235938/xiaomi-redmi-note-10-pro-thumb-vang-dong-600x600-200x200.jpg",
  //     type: "Xiaomi",
  //   },
  //   {
  //     id: 3,
  //     name: "Xiaomi Redmi Note 11s",
  //     screen: "AMOLED,Full HD+ (1080 x 2400 Pixels),6.43 inches",
  //     system: "Android 10.0; MIUI 11",
  //     frontCamera: "16 MP",
  //     rearCamera: "108 MP + 8 MP + 2 MP + 2 MP",
  //     ram: "8 GB",
  //     rom: "128 GB",
  //     price: "5.990.000",
  //     priced: 5990000,
  //     description:
  //       "Xiaomi Redmi Note 11s 128GB là chiếc điện thoại giá rẻ của Xiaomi, máy có màn hình 6.43 inches. Cấu hình ổn định với chipset Helio G96. Ngoài ra, máy còn có cụm 4 camera với cảm biến 108MP, phù hợp với mọi đối tượng người dùng.",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product//x/i/xiaomi-redmi-note-11s-128gb-didongviet.jpg",
  //     type: "Xiaomi",
  //   },
  //   {
  //     id: 4,
  //     name: "Galaxy Z Fold3 5G ",
  //     screen:
  //       "Dynamic AMOLED 2X,Full HD+ (1768 x 2208 Pixels),Chính 7.6 inches & Phụ 6.2 inches",
  //     system: "Android 11",
  //     frontCamera: "10 MP & 4 MP",
  //     rearCamera: "3 camera 12 MP",
  //     ram: "12 GB",
  //     rom: "256 GB",
  //     price: "28.590.000",
  //     priced: 28590000,
  //     description:
  //       "Galaxy Z Fold3 5G 256GB siêu phẩm nhà Samsung với thiết kế hiện đại, sang trọng, màn hình chính 7.6 inch và màn hình phụ 6.2 inch, đi kèm là công nghệ Foldable Dynamic AMOLED 2X. Là chiếc smartphone gập với nhiều tính năng cao câp, máy chạy hệ điều hành Android 11, One UI 3.5, bộ nhớ RAM đến 12GB. ",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-z-fold3-5g-256gb-didongviet_1.jpg",
  //     type: "Samsung",
  //   },
  //   {
  //     id: 5,
  //     name: "Samsung Galaxy S22 Ultra 5G ",
  //     screen: "Dynamic AMOLED 2X,QHD+ (1440 x 3088 pixels),6.8 inches",
  //     system: "Android 12 - OneUI 4.0",
  //     frontCamera: "40 MP",
  //     rearCamera: "108 MP + 12 MP + 10 MP + 10 MP",
  //     ram: "12 GB",
  //     rom: "256 GB",
  //     price: "27.990.000 ",
  //     priced: 27990000,
  //     description:
  //       "Samsung Galaxy S22 Ultra 5G 256GB Bản đặc biệt là điện thoại chính hãng Samsung, nhận bảo hành 12 tháng theo chính sách ủy quyền của Samsung Việt Nam. Khi mua phiên bản này, khách hàng sẽ được tặng kèm bộ quà đặc biệt có giới hạn là: 01 đồng hồ Galaxy Watch4 44mm và 01 đế sạc nhanh không dây 15W",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s22-ultra-128gb-didongviet_1.jpg",
  //     type: "Samsung",
  //   },
  //   {
  //     id: 6,
  //     name: "Samsung Galaxy A73",
  //     screen: "Super AMOLED Plus,Full HD+ (1080 x 2400 Pixels),6.7 inches",
  //     system: "Android 12 - OneUI 4.0",
  //     frontCamera: "32 MP",
  //     rearCamera: "Chính 108 MP & Phụ 12 MP, 5 MP, 5 MP",
  //     ram: "8 GB",
  //     rom: "128 GB",
  //     price: "9.790.000",
  //     priced: 9790000,
  //     description:
  //       "Samsung Galaxy A73 sở hữu thiết kế cao cấp với màn hình 6.7 inch Full HD+, tấm nền Super AMOLED tần số quét 120Hz, bộ vi xử lý Snapdragon 778G, giao diện OneUI 4.1 trên nền tảng Android 12. Bộ 4 camera với camera chính 108MP mang lại khả năng chụp ảnh đỉnh cao hỗ trợ nhiều filter, chế độ chụp ảnh khác nhau.",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a73-didongviet_1.jpg",
  //     type: "Samsung",
  //   },
  //   {
  //     id: 7,
  //     name: "iPhone 13",
  //     screen: "OLED,1170 x 2532 Pixels,6.1 inches",
  //     system: "iOS 15",
  //     frontCamera: "12 MP",
  //     rearCamera: "2 camera 12 MP",
  //     ram: "4 GB",
  //     rom: "128 GB",
  //     price: "19.390.000 ",
  //     priced: 19390000,
  //     description:
  //       "iPhone 13 128GB với thiết kế ngoại hình giống iPhone 12 đã quá “mãn nhãn” người dùng, lần này với những nâng cấp sâu hơn trên iPhone 13 về cấu hình cũng như camera, viên pin được nâng cấp từ dung lượng đến độ bền bỉ sẽ gây ấn tượng mạnh mẽ đến dàn iFans hùng hậu trên toàn thế giới.",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product/i/p/iphone-13-128gb-didongviet_1.jpg",
  //     type: "Iphone",
  //   },
  //   {
  //     id: 8,
  //     name: "iPhone 12",
  //     screen: "Super Retina XDR OLED,1170 x 2532 pixels,6.1 inches",
  //     system: "iOS 14",
  //     frontCamera: "12 MP",
  //     rearCamera: "12 MP + 12 MP",
  //     ram: "4 GB",
  //     rom: "128 GB",
  //     price: "17.590.000 ",
  //     priced: 17590000,
  //     description:
  //       "iPhone 12 128GB ra mắt nổi bật với mức giá phải chăng nhưng được tích hợp hàng loạt tính năng cao cấp hấp dẫn. Apple iPhone 12 được đánh giá là điện thoại kế nhiệm iPhone 11 hoàn hảo bởi Apple đã tinh chỉnh khá nhiều chi tiết từ ngoại hình đến cấu hình.",
  //     image: "https://didongviet.vn/pub/media/catalog/product/i/p/ip12.jpg",
  //     type: "Iphone",
  //   },
  //   {
  //     id: 9,
  //     name: "iPhone 11 ",
  //     screen: "IOS 13",
  //     system: "Android 12 - OneUI 4.0",
  //     frontCamera: "12 MP, f/2.2",
  //     rearCamera: "12MP + 12MP",
  //     ram: "4 GB",
  //     rom: "128 GB",
  //     price: "12.790.000",
  //     priced: 12790000,
  //     description:
  //       "Vừa qua, Apple vừa chính thức ra mắt iPhone 11 128GB chính hãng. Máy là phiên bản thấp nhất trong bộ ba nhưng vẫn sở hữu đầy đủ cấu hình flagship cũng như thiết kế không kém cạnh gì hai thiết bị iPhone 11 Pro. Hiệu năng đứng top đầu hiện nay cùng cụm camera được nâng cấp về phần cứng khiến máy trở thành lựa chọn hàng đầu cho nhu cầu công việc lẫn giải trí.",
  //     image:
  //       "https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_3.jpg",
  //     type: "Iphone",
  //   },
  // ];
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    objItem: {},
    cart: [],
    item: [...this.products],
  };

  addToCart = (itemCart) => {
    const cloneCart = [...this.state.cart];
    const foundItem = this.state.cart.find((item) => {
      return item.producta.id === itemCart.id;
    });
    if (foundItem) foundItem.qty += 1;
    else {
      var item = {
        producta: itemCart,
        qty: 1,
      };
      cloneCart.push(item);
    }
    this.setState({
      cart: cloneCart,
    });
  };

  selectItem = (item) => {
    this.setState({
      objItem: item,
    });
  };

  delelteCart = (id) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = this.state.cart.findIndex((item) => {
      return (item.producta.id = id);
    });
    if (foundIndex !== -1) cloneCart.splice(foundIndex, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  delelteCartQty = (id) => {
    const cloneCart = [...this.state.cart];
    const foundIndex = this.state.cart.findIndex((item) => {
      return item.producta.id === id;
    });
    if (foundIndex !== -1) {
      if (cloneCart[foundIndex].qty !== 1) {
        cloneCart[foundIndex].qty -= 1;
      } else {
        cloneCart.splice(foundIndex, 1);
      }
    }
    this.setState({
      cart: cloneCart,
    });
  };
  clearCart = () => {
    this.setState({
      cart: [],
    });
  };

  render() {
    return (
      <div className="bg-secondary">
        <header>
          <Header/>
        </header>
      <div className="container bg-secondary">
        <div className="d-flex justify-content-end mt-2">
          <button
            data-bs-toggle="modal"
            data-bs-target="#shoppingCart"
            className="fs-4 border-0 btn btn-outline-primary"
          >
            <i className="bi bi-cart-fill"></i>
          </button>
        </div>
        <div className="text-start">
          <select aria-label="Default select example">
            <option value={1}>All</option>
            <option value={2}>Run</option>
            <option value={3}>Originals</option>
            <option value={4}>FootBall</option>
          </select>
        </div>
        <ShoppingCart
          addToCart={this.addToCart}
          delelteCartQty={this.delelteCartQty}
          clearCart={this.clearCart}
          delelteCart={this.delelteCart}
          add={this.state.cart}
        />
        <ProductList
          addToCart={this.addToCart}
          selectItem={this.selectItem}
          prod={this.products}
        />
        {this.state.objItem && <ProductDetail  addToCart={this.addToCart} detail={this.state.objItem} />}
      </div>
      <div>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default HomePhone;
