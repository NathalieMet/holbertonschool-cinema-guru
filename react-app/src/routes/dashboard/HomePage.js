import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [minYear, setMinYear] = useState('1970');
	const [maxYear, setMaxYear] = useState('2022');
	const [genres, setGenres] = useState([]);
	const [sort, setSort] = useState("");
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);

	const loadMovies = async (page) => {

		const accessToken = localStorage.getItem('accessToken');

		try {
			const url = 'http://localhost:8000/api/titles/advancedsearch';
			const response = await axios.get(url, {
				params: { minYear, maxYear, genres, title, sort, page },
				headers: {
					'Authorization': `Bearer ${accessToken}`,
				},
			});

			setMovies((prevMovies) => [...prevMovies, ...response.data.titles]);
			console.log("Movies loaded:", response.data.titles);
		} catch (error) {
			console.error("Error loading movies:", error.response ? error.response.data : error.message);
		}
	};

	useEffect(() => {
		setMovies([]);
		loadMovies(page);
	}, [minYear, maxYear, genres, title, sort, page]);

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<div className="home-page">
			<Filter
				minYear={minYear}
				setMinYear={setMinYear}
				maxYear={maxYear}
				setMaxYear={setMaxYear}
				sort={sort}
				setSort={setSort}
				genres={genres}
				setGenres={setGenres}
				title={title}
				setTitle={setTitle}>
			</Filter>

			<div className="movie-list">
			{movies.map((movie, index) => (
				<MovieCard
				key={`${movie.imdbId}-${index}`}
					movie={movie}
				/>
			))}
			</div>

			<Button
			label="Load More.."
			className="loadMore"
			onClick={() => (handleLoadMore)}
			type="button">
			</Button>
		</div>
	);
};

export default HomePage;
