import './auth.css';
import { useState } from 'react';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [_switch, set_switch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="html_form">
			<form>
				<div className='auth_buttons'>
				<Button
					label="Sign In"
					className="sign_in_button"
					onClick={() => set_switch(true)}
					type="button"
				/>
				<Button
					label="Sign Up"
					className="sign_up_button"
					onClick={() => set_switch(false)}
					type="button"
				/>
				</div>
				{_switch ? (
					<Login
						username={username}
						password={password}
						setUsername={setUsername}
						setPassword={setPassword}></Login>
				) : (<Register
					username={username}
					password={password}
					setUsername={setUsername}
					setPassword={setPassword}></Register>
				)}
			</form>
		</div>
	);
};

export default Authentication;
