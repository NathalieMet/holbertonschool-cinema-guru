import './movies.css'
import { useState } from 'react';

const Tag = ({genre, filter, genres, setGenres}) => {
	const [selected, setSelected] = useState(false);

	const handleTag = () => {
		if (selected)
		{
		setGenres(genres.filter(g => g !== genre));
		setSelected(false)
		}
		else {
			setGenres([...genres, genre]);
		setSelected(true)
		}
	};

	return (
		<li onClick={handleTag} className={selected ? 'selected' : ''}>
			{genre}
		</li>
	);
  };

  export default Tag;
