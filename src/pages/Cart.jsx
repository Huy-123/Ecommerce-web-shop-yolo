import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import productData from "../assets/fake-data/products";

import Helmet from "../components/Helmet";

import numberWithCommas from './../utils/numberWithCommas';
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems.value);

//   console.log(productData.getCartItemsDetail(cartItems));

  const [cartProducts, setcartProducts] = useState([]);
  const [totalProducts, settotalProducts] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);

//   console.log("cartProducts: ", cartProducts);

  useEffect(() => {
    setcartProducts(productData.getCartItemsDetail(cartItems));
    settotalProducts(cartItems.reduce((total, item)=>(total + Number(item.quantity)), 0));
    settotalPrice(cartItems.reduce((total, item) => (total + (Number(item.quantity) * Number(item.price))), 0));
  }, []);

  return (
	<Helmet title="Giỏ hàng">
		<div className="cart">
			<div className="cart__info">
				<div className="cart__info__txt">
					<p>
						Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
					</p>
					<div className="cart__info__txt__price">
						<span>Thành tiền</span>
						<span>{numberWithCommas(totalPrice)}</span>
					</div>
				</div>
				<div className="cart__info__btn">
					<Button size="block">đặt hàng</Button>
					<Link to="/catalog">
						<Button size="block">tiếp tục mua hàng</Button>
					</Link>
				</div>
			</div>
			<div className="cart__list">
				{cartProducts.map((item, index) => (
					<CartItem item={item} key={index}></CartItem>
				))}
			</div>
		</div>
	</Helmet>
  );
}

export default Cart;
