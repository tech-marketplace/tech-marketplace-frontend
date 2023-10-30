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
          <div className="text-center">
            <h4>Shopping Cart</h4>
            <p className="mt-3 light-grey-color">Your cart is empty</p>
            <div>
              <Link to="/" className="text-decoration-none text-black">
                <i class="bi bi-arrow-left me-2"></i>
                Start Shopping
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
            <div className="d-lg-flex justify-content-center align-items-center">
              <div className="col-lg-8">
                {cart.cartItems?.map((cartItem) => (
                  <div key={cartItem._id}>
                    <div className="d-lg-flex mt-5">
                      <div className="col-4">
                        {" "}
                        <img src={cartItem.itemImage} alt={cartItem.name} />
                      </div>
                      <div className="col-lg-7 d-lg-flex align-items-center">
                        <div>
                          <div>
                            <h4>{cartItem.title}</h4>
                            <p>{cartItem.description}</p>
                            <p className="m-0 p-0">N{cartItem.price}</p>
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
                              className="text-decoration-none light-grey-color"
                            >
                              {" "}
                              Remove
                            </a>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            onClick={() => handleDecreaseCart(cartItem)}
                            className="MinusBtn mx-2"
                          >
                            -
                          </button>
                          <div>{cartItem.cartQuantity}</div>
                          <button
                            onClick={() => handleIncreaseCart(cartItem)}
                            className="PlusBtn mx-2"
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
                <div className="card p-3 card-div">
                  {" "}
                  <div>
                    <div>
                      <h4>Cart Total</h4>
                      <div className="d-flex justify-content-between">
                        <p>
                          Subtotal <br />
                          <p style={{ fontSize: "0.7rem" }} className="p-0 m-0">
                            (Tax inclusive)
                          </p>
                        </p>
                        {/* <p className="p-0 m-0">Taxes incls.</p> */}
                        <p>N{cart.cartTotalAmount}</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Total</p>
                      <p className="bold-text">N{cart.cartTotalAmount}</p>
                    </div>
                    {auth._id ? (
                      <div className="text-center">
                        <button className="LoginBtn">Checkout</button>
                      </div>
                    ) : (
                      <div className="text-center">
                        {" "}
                        <button
                          className="LoginBtn"
                          onClick={() => navigate("/login")}
                        >
                          Log in to checkout
                        </button>
                      </div>
                    )}{" "}
                  </div>{" "}
                  <div className="d-flex justify-content-between mt-4">
                    <a
                      href="/"
                      className="text-decoration-none text-black"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <i class="bi bi-arrow-left me-2"></i>
                      Continue Shopping
                    </a>{" "}
                    <div>
                      <a
                        href=""
                        onClick={() => handleClearCart()}
                        className="text-decoration-none light-grey-color"
                      >
                        {" "}
                        Clear Cart
                      </a>
                    </div>
                  </div>
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
