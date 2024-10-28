import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {

	return (
		<div className="dashboard">
			<Header
			userUsername={userUsername}
			setIsLoggedIn={setIsLoggedIn}>
			</Header>
			<SideBar></SideBar>
		</div>
	);
};

export default Dashboard;
