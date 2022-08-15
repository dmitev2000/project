import "./UI.css";

const Button = ({ url, text }) => {
  return (
    <a href={url} className="custom-button">
      {text}
      <span></span>
    </a>
  );
};

export default Button;
