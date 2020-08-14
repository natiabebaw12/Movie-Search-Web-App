import React from 'react';

const SearchMovie = () => {
	return (
		<>
			<form className="form">
				<label className="label" htmlFor="query">
					Movie Name:{' '}
				</label>
				<input
					className="input"
					name="query"
					placeholder="Search Movie..."
					value={''}
				/>
				<button className="button" type="submit">
					Search
				</button>
			</form>
		</>
	);
};

export default SearchMovie;
