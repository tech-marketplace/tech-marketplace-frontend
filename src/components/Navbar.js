import React from "react";
import logoIcon from "../assets/icons/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loginButtonConfig from "./loginButtonConfig";
import homeIconConfig from "./homeIcon";
import profileIconConfig from "./homeIcon";
import cartIcon from "../assets/icons/carticon.svg";
import HomeIcon from "../assets/icons/icon-home.svg";
import ProfileIcon from "../assets/icons/icon-person.svg";
import searchIcon from "../assets/icons/search.svg";
// import '../sassfiles/components/_navbar.scss';
import { Loginbtn } from "./Buttons/AuthenticationButtons";
import NavLoginbtn from "./Buttons/NavLoginbtn";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {" "}
              {/* Div holding logo and techmarketplace */}
              <Link to="/">
                <img
                  src={logoIcon}
                  alt=""
                  width={100}
                  height={100}
                  className="me-4"
                />
              </Link>
              <h5>Tech Marketplace</h5>
            </div>
            <div className="d-flex align-items-center">
              {" "}
              {/* Div holding searchbox, carticon, and button */}
              <form className="d-flex me-2" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </form>
              <div className="d-flex ms-4">
                <Link to="/cart">
                  <img src={cartIcon} alt="Cart" width={20} />
                </Link>
                {/* <span>
                  <button
                    style={{
                      width: "33px",
                      height: "31px",
                      flexShrink: 0,
                      fill: "#000",
                    }}
                  >
                    {" "}
                    <sup style={{ fontSize: "1.2rem",  }}>
                      {cartTotalQuantity}
                    </sup>
                  </button>
                </span> */}
                <span>
                  <sup
                    className="cart-badge ms-1"
                    style={{ fontSize: "0.8rem", color: "white" }}
                  >
                    {" "}
                    {/* Add a div for the round background */}
                    {/* <sup style={{ fontSize: "1.2rem", color: "white" }}> */}
                    {cartTotalQuantity}
                    {/* </sup> */}
                  </sup>
                </span>
              </div>
              {auth._id ? (
                <button
                  className="LoginBtn ms-4"
                  onClick={() => {
                    navigate("/");
                    dispatch(logoutUser(null));
                    toast.warning("Logged out!", { position: "bottom-left" });
                  }}
                  // className="LoginBtn"
                >
                  Logout
                </button>
              ) : (
                <>
                  {" "}
                  <button
                    className="LoginBtn ms-3"
                    onClick={() => {
                      navigate("/login");
                      toast.warning("User logged in", {
                        position: "bottom-left",
                      });
                    }}
                  >
                    Login
                  </button>
                  {/* <Link to="login">Login</Link> */}
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

const Navbarr = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex mt-5 justify-content-between">
          <div className="d-flex">
            <div>
              <Link to="/">
                <img
                  src={logoIcon}
                  alt=""
                  width={60}
                  height={70}
                  className="me-4"
                />
              </Link>
            </div>
            <div className="d-flex align-items-center">
              {" "}
              <h5>Tech Marketplace</h5>
            </div>
          </div>
          <div>
            {" "}
            <div className="d-flex">
              {" "}
              <div>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  {/* <button class="btn btn-outline-success" type="submit">
                    Search
                  </button> */}
                </form>
              </div>
              <div className="d-flex">
                {" "}
                {/* <div>
                  {" "}
                  <Loginbtn />
                </div> */}
                <div className="ms-4 pt-2">
                  <Link to="/cart">
                    <img src={cartIcon} />
                  </Link>
                  <span>
                    <sup style={{ fontSize: "1.2rem" }}>
                      {cartTotalQuantity}
                    </sup>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {auth._id ? (
          <button
            onClick={() => {
              navigate("/");
              dispatch(logoutUser(null));
              toast.warning("Logged out!", { position: "bottom-left" });
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

const Logout = () => {
  <>
    <p>Logout</p>
  </>;
};
export default Navbar;
