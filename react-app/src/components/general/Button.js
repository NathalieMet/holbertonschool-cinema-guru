import './general.css';

const Button = ({ label, className, onClick, icon}) => {
	return (
		<button
      className={`button ${className}`}
      onClick={onClick}
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
	  );
};

export default Button;
