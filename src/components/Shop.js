import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../actions";
// import { decrement } from "../actions";
// import { clear_cart } from "../actions";

// import img4 from "../images/item4.jpg";
// import openImg from "../images/wereopen.jpg";
// import celebration from "../images/celebration.mp4";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";
import "../App.css";

function Shop({ cart = [], total, dispatch }) {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  return (
    <div className="cart">
      <div className="carts">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <hr />
      <div className="cart-total">
        <h4>
          total <span>{total}Dt</span>
        </h4>

        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(Shop);
