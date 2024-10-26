import './auth.css';
import { useState } from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
	const [_switch, set_switch] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(username, password)

		try {
			const url = _switch
				? 'http://localhost:8000/api/auth/login'
				: 'http://localhost:8000/api/auth/register';

			const response = await axios.post(url, { username, password },
			)

			const token = response.data.accessToken;
			localStorage.setItem('accessToken', token);

			setUserUsername(username);
			setIsLoggedIn(true);

			console.log("Authentification réussie :", response);
		} catch (error) {
			console.error("Erreur d'authentification :", error.response ? error.response.data : error.message);
		}
	};

	return (
		<div className="html_form">
			<form onSubmit={handleSubmit}>
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
