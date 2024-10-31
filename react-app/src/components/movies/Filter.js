import './movies.css'
import Input from '../general/Input'
import SelectInput from '../general/SelectInput';
import SearchBar from '../general/SearchBar';
import Tag from './Tag'

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
	const genreList = [
		'Action', 'Drama', 'Comedy', 'Biography', 'Romance', 'Thriller',
		'War', 'History', 'Sport', 'Sci-Fi', 'Documentary', 'Crime', 'Fantasy'
	];

	return (
		<div className='filters'>
			<SearchBar
				title='Search movies'
				setTitle={setTitle} />

			<div className='filter-inputs'>
				<Input
					label="Min Date:"
					type="number"
					className="MinDate"
					value={minYear}
					onChange={(e) => setMinYear(Number(e.target.value))}
					min={1900}
					max={maxYear}
					step="1"
				/>
				<Input
					label="Max Date:"
					type="number"
					className="MaxDate"
					value={maxYear}
					onChange={(e) => setMaxYear(Number(e.target.value))}
					min={minYear}
					max={new Date().getFullYear()}
					step="1"
				/>
				<SelectInput
					label="Sort"
					options={['latest', 'oldest', 'highestrated', 'lowestrated']}
					className="selectSortInput"
					value={sort}
					setValue={setSort}/>
			</div>


			<div className='tags'>
				{genreList.map((genre) => (
					<Tag
						key={genre}
						genre={genre}
						filter={true}
						genres={genres}
						setGenres={setGenres}
					/>
				))}
			</div>
		</div>
	);
};

export default Filter;
