import './navigation.css'
import logoutIcon from '../../assets/images/logout.png';

const Header = ({ userUsername, setIsLoggedIn }) => {
	const logout = () => {
		localStorage.removeItem('accessToken');
		setIsLoggedIn(false);
}

	return (
	  <nav className='header-container'>
		<p className='cinema-guru'>Cinema Guru</p>
		<div className='right'>
		<img className="avatar-logo" src="https://picsum.photos/100/100" alt='avatar'></img>
		<p>Welcome, {userUsername}</p>
		<span onClick={logout}>
			<img src={logoutIcon} alt='logout'></img>
			Logout
		</span>
		</div>
	  </nav>
	);
  };

  export default Header;
