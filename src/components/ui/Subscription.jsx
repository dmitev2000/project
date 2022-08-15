import "./UI.css";

const Subscription = ({ price, type }) => {
  return (
    <div className="sub_plan">
      <h3>{type}</h3>
      <p>{!isNaN(price) ? <span>${price}</span> : <span>{price}</span>}</p>
      <button>Join now</button>
    </div>
  );
};

export default Subscription;
