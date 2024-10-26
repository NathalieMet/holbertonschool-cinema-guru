import './general.css';

const Button = ({ label, className, onClick, icon, type = "button" }) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className="icon" />}
      {label}
    </button>
  );
};

export default Button;
