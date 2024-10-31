import './components.css'

const Activity = ({ activity }) => {
	return (
	  <li>
		<p>
			<span className='red-text'>{activity.user.username}
			</span> added
			<span className='red-text'> {activity.title.title}
			</span> to {activity.activityType} - {new Date(activity.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
	  </li>
	);
  };

  export default Activity;
