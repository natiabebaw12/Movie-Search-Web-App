import React, {useState} from 'react';

const SearchMovie = () => {

	//state - input query
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovie = async (e) => {
		e.preventDefault();

		try {
			const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
			console.log(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form className="form" onSubmit={searchMovie}>
				<label className="label" htmlFor="query">
					Movie Name:{' '}
				</label>
				<input
					className="input"
					name="query"
					placeholder="Search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
		</>
	);
};

export default SearchMovie;
