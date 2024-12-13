/* eslint-disable react/jsx-key */
import  { useContext } from "react";
import { ecomcontext } from "../App";
import CardQuant from "../components/CardQuant";

function Cart() {
  const { cart} = useContext(ecomcontext);
  return (
    <>
      {cart.map((item) => {
        return (
          <div className="Cart">
            <div className="cartImage">
            <img src={item.image} alt="" />
            </div>
            <div className="cartItem">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <CardQuant id={item.id} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
