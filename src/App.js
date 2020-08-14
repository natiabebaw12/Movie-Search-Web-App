import React from 'react';
import './App.css';
import SearchMovie from './components/SearchMovie'

function App() {
	return (
		<div className="container">
			<header className="header">
				<img src="./movie_logo.png" className="logo" alt="Logo"/>
				<h1 className="title"> Movie search </h1>
			</header>

      <SearchMovie />
		</div>
	);
}

export default App;
