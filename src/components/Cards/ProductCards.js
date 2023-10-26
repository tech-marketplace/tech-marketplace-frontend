import React from "react";
import { useNavigate } from "react-router-dom";
import ProductPicture from "../../assets/images/productheroimage.png";
import addButton from "../../assets/icons/addButton.png";
// import '../../sassfiles/components/_cards.scss'
import { Link } from "react-router-dom";
import { Plusbtn } from "../../components/Buttons/actionBtn";
import { useGetAllProductsQuery } from "../../features/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";

const ProductCards = () => {
  // const { items, status } = useSelector((state = state.products));
  // const auth = useSelector((state = state.auth));
  // console.log(auth);
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  console.log(data);
  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly mt-3">
          {" "}
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occured...</p>
          ) : (
            <>
              {" "}
              <div className="d-flex flex-wrap justify-content-evenly">
                {data.data.items.map((product) => (
                  <div
                    key={product._id}
                    className="col-lg-4 col-md-6 mt-3 mb-5 px-4"
                  >
                    <div className="card px-3">
                      <img
                        src={product.itemImage}
                        className="card-img-top my-3"
                        height={300}
                        alt=""
                      />
                      <h4 className="">{product.title}</h4>
                      {/* <p className="">{product.description}</p> */}
                      {/* <a href="#">View Details</a> */}
                      <div className="d-flex justify-content-between m-0 p-0">
                        <p className="">
                          <b>N{product.price}</b>
                        </p>
                        {/* <Plusbtn /> */}
                        <button
                          className="addToCartBtn"
                          onClick={() => handleAddToCart(product)}
                        >
                          +
                        </button>
                      </div>{" "}
                      <p className="m-0 p-0" style={{ fontSize: "0.8rem" }}>
                        In Stock:
                        {""}
                        {""} {""}
                        {product.countInStock}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCards;
