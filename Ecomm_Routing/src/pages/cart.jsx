/* eslint-disable react/jsx-key */
import  { useContext } from "react";
import { ecomcontext } from "../App";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, handleRemoveFromCart } = useContext(ecomcontext);
  return (
    <>
      {cart.map((item) => {
        return (
          <div>
            <div className="cartimg">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleRemoveFromCart(item);
              }}
            >
              Remove Item
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
