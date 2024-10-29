import './movies.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isWatchLater, setIsWatchLater] = useState(false);

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken) {
			const fetchAuth = async () => {
				try {
					const responseFavorite = await fetch('http://localhost:8000/api/titles/favorite/', {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${accessToken}`,
						},
					});
					const responseIswatchlater = await fetch('http://localhost:8000/api/titles/watchlater/', {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${accessToken}`,
						},
					});

					if (!responseFavorite.ok || !responseIswatchlater.ok) {
						throw new Error('Server response was not ok');
					}

					const favorites = await responseFavorite.json();
					const watchLater = await responseIswatchlater.json();

					if (favorites.some(item => item.title === movie.title)) {
						setIsFavorite(true);
					}
					if (watchLater.some(item => item.title === movie.title)) {
						setIsWatchLater(true);
					}

				}
				catch (error) {
					console.error("Erreur d'authentification :", error);
				}
			};

			fetchAuth();
		}
	}, [movie.title]);

	const handleClick = async (type) => {
		const accessToken = localStorage.getItem('accessToken');
		if (!accessToken) return;

		const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;
		const method = (type === 'favorite' ? isFavorite : isWatchLater) ? 'DELETE' : 'POST';

		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Authorization': `Bearer ${accessToken}`,
				},
			});

			if (!response.ok) {
				throw new Error('Server response was not ok');
			}

			if (type === 'favorite') {
				setIsFavorite(!isFavorite);
			} else if (type === 'watchlater') {
				setIsWatchLater(!isWatchLater);
			}
		}
		catch (error) {
			console.error("Erreur lors de la mise à jour :", error);
	};
};

return (
	<div className='movieCard'>
		<div className='icons'>
			<li className="movie-card">
				<FontAwesomeIcon
					icon={faStar}
					className={isFavorite ? "icon-isfavorite" : "icon-isnotfavorite"}
					onClick={() => handleClick('favorite')}
				/>
				<FontAwesomeIcon
					icon={faClock}
					className={isWatchLater ? "icon-iswatchlater" : "icon-isnotwatchlater"}
					onClick={() => handleClick('watchlater')}
				/>
			</li>
		</div>
		<div className="movie-info">
			<h3>{movie.title}</h3>
			<p>{movie.description}</p>
			<p>{movie.genre}</p>
		</div>
	</div>
);
};

export default MovieCard;
