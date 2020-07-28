import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, TOGGLE_AMOUNT, removeItem } from "../actions";
const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
  toggle,
}) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        style={{ width: "300px", height: "200px" }}
        src={img}
        alt={title}
      />
      <div className="card-body">
        <h4>{title}</h4>
        <h4 className="item-price">{price}DT</h4>
        <button className="btn btn-danger " onClick={() => remove()}>
          remove
        </button>
      </div>
      <div className="btns">
        <button className="btn btn-primary " onClick={() => toggle("inc")}>
          +
        </button>
        <p className="amount">{amount}</p>
        <button
          className="btn btn-primary "
          onClick={() => {
            if (amount === 1) {
              return remove();
            } else {
              return toggle("dec");
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
    toggle: (toggle) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggle } }),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
