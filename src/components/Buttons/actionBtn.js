import plusButton from "../../assets/icons/plusButton.png";

export const SellBtn = () => {
  return (
    <>
      <button className="sellbtn">Sell Now</button>
    </>
  );
};

export const BuyNowBtn = () => {
  return (
    <>
      <button className="BuyNowBtn">Buy Now</button>
    </>
  );
};

export const Plusbtn = () => {
  return (
    <button className="addBtn">
      <img src={plusButton} />
    </button>
  );
  // return <button className="addBtn">+</button>;
};

export const AddToCartbtn = () => {
  return <button className="addToCartBtn">Add to cart</button>;
};

export default AddToCartbtn;
