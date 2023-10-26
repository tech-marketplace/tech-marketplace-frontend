import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCards from "../components/Cards/ProductCards";
import ProceedToCheckoutbtn from "../components/Buttons/Actionbtns/ProceedToCheckoutbtn";
// import '../sassfiles/pages/_cart.scss'

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = (cartItem) => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Navbar />
      {/* <div className="leftSide">Cart Purchased</div> */}
      <div className="container-fluid mt-5">
        {/* <div></div> */}
        {/* <h1>Cart Total</h1> */}
        {cart.cartItems.length === 0 ? (
          <div className="property">
            <p>Your cart is empty</p>
            <div>
              <Link to="/">
                <p>Start Shopping</p>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* <div> */}
            {/* <div className="property">Product</div>
              <div className="value">Price</div>
              <div className="property">Shipping</div>
              <div className="value">Quantity</div>
              <div className="property">Total</div> */}
            {/* </div> */}
            <div className="d-lg-flex justify-content-center">
              <div className="col-lg-8">
                {cart.cartItems?.map((cartItem) => (
                  <div key={cartItem._id}>
                    <div className="d-lg-flex">
                      <div className="col-4">
                        {" "}
                        <img src={cartItem.itemImage} alt={cartItem.name} />
                      </div>
                      <div className="col-lg-7 d-lg-flex">
                        <div>
                          <div>
                            <h3>{cartItem.title}</h3>
                            <p>{cartItem.description}</p>
                            <p>N{cartItem.price}</p>
                          </div>
                          {/* <div>
                        <p>{cartItem.countInStock}</p>
                      </div> */}
                          <div>
                            {/* <button
                            
                            ></button> */}
                            <a
                              href=""
                              onClick={() => handleRemoveFromCart(cartItem)}
                              className="text-decoration-none text-black"
                            >
                              {" "}
                              Remove
                            </a>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            onClick={() => handleDecreaseCart(cartItem)}
                            className="mx-2"
                          >
                            -
                          </button>
                          <div>{cartItem.cartQuantity}</div>
                          <button
                            onClick={() => handleIncreaseCart(cartItem)}
                            className="mx-2"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* <div>${cartItem.price * cartItem.cartQuantity}</div> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-3 mt-5">
                {" "}
                <div>
                  <div>
                    <p>Subtotal</p>
                    <p>${cart.cartTotalAmount}</p>
                    <p>Taxes and shipping calculated at checkout</p>
                  </div>
                  {auth._id ? (
                    <button>Checkout</button>
                  ) : (
                    <button onClick={() => navigate("login")}>
                      Log in to checkout
                    </button>
                  )}{" "}
                </div>{" "}
                <a href="/">Continue Shopping</a>{" "}
                <div>
                  <button onClick={() => handleClearCart()}>Clear Cart</button>
                </div>
              </div>
            </div>

            {/* <div>
              <button>Checkout</button>
            </div> */}
          </>
        )}
        {/* <div className="property">Subtotal:</div>
        <div className="value">N500,000</div>
        <div className="property">Shipping:</div>
        <div className="value">
          Pick up: You can either come to the store or send a rider for pickup.
        </div>
        <div className="property">Total:</div>
        <div className="value">N500,000</div> */}
        {/* <ProceedToCheckoutbtn /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
