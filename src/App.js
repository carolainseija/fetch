//clase 177
import React from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json();
    const transformedMovies = data.results.map(res => {
      return {
        id: res.episode_id,
        title: res.title,
        openingText: res.opening_crawl,
        releaseDate: res.release_date
      }
    });
    setMovies(transformedMovies)
    setIsLoading(false)
    console.log(movies.id)
    .catch() //
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {/* {isLoading && <MoviesList movies={movies} />} */}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
