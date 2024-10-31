import './navigation.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Activity from '../Activity';
import axios from 'axios';
import directoryIcon from '../../assets/images/directory.png';
import starIcon from '../../assets/images/star.png';
import clockIcon from '../../assets/images/clock.png';

const SideBar = () => {
	const [selected, setSelected] = useState("home");
	const [small, setSmall] = useState(true);
	const [activities, setActivities] = useState([]);
	const [showActivities, setshowActivities] = useState(false);

	const navigate = useNavigate();

	const setPage = (pageName) => {
		setSelected(pageName);
		if (pageName === "Home") navigate('/home');
		else if (pageName === "Favorites") navigate('/favorites');
		else if (pageName === "Watch Later") navigate('/watchlater');
	}

	const accessToken = localStorage.getItem('accessToken');
	useEffect(() => {
		const fetchActivities = async () => {
			try {
				const response = await axios.get('http://localhost:8000/api/activity',
					{ headers: {
					'Authorization': `Bearer ${accessToken}`,
				  },});
				setActivities(response.data);
				console.dir(response.data)

			} catch (error) {
				console.error("Erreur réponse serveur activities :", error);
			}
		};

		fetchActivities();
	},
		[]);

		return (
			<nav className={small ? 'sidebar-nav-small' : 'sidebar-nav'} onClick={() => setSmall(!small)}>
				<ul className={small ? 'navigation-small' : 'navigation'}>
					<div className='li-container'>
						<img src={directoryIcon} alt="" className="icon" />
						<li onClick={() => setPage("Home")}>{!small && "Home"}</li>
					</div>
					<div className='li-container'>
						<img src={starIcon} alt="" className="icon" />
						<li onClick={() => setPage("Favorites")}>{!small && "Favorites"}</li>
					</div>
					<div className='li-container'>
						<img src={clockIcon} alt="" className="icon" />
						<li onClick={() => setPage("Watch Later")}>{!small && "Watch Later"}</li>
					</div>
				</ul>
				{!small && (
					<div className='activities-sidebar'>
						<h1>Latest Activities</h1>
					<ul className='activity'>
						{activities.slice(0, 10).map((activity, index) => (
							 <Activity key={activity.id || index} activity={activity} />
						))}
					</ul>
					</div>
				)}
			</nav>
		);
	};

export default SideBar;
