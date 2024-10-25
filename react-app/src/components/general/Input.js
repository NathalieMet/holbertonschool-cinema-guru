import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
	const handleInput = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className="input">
		<label htmlFor="input">{label}</label>
		{icon && <span className="icon">{icon}</span>}
		<input
		type={type}
		className={className}
		value={value}
		onChange={handleInput}
		{...inputAttributes}
		/>
		<div class="red-line"></div>
		</div>
	  );
};

export default Input;
