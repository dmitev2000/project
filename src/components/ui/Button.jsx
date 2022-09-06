import "./UI.css";
import { Link } from "react-router-dom";

const Button = ({ path, text }) => {

  return (
    <Link to={path} className="custom-button">
      {text}
      <span></span>
    </Link>
  );
};

export default Button;
