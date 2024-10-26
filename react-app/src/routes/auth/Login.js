import './auth.css';
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import avatarIcon from '../../assets/images/avatar.png';
import keyIcon from '../../assets/images/greykey.png';
import keyWhiteIcon from '../../assets/images/whitekey.png';

const Login = ({ username, password, setUsername, setPassword }) => {
	return (
		<div className="login">
			<p>Sign in with your account</p>
			<Input
				label="Username:"
				type='text'
				className='username_login'
				value={username}
				setValue={setUsername}
				icon={avatarIcon}>
			</Input>
			<Input
				label="Password:"
				type='password'
				className='password_login'
				value={password}
				setValue={setPassword}
				icon={keyIcon}>
			</Input>
			<Button type="submit"
				label="Sign In"
				className="sign_in_button_login"
				icon={keyWhiteIcon}>
			</Button>
		</div>
	);
};

export default Login;
