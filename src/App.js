 import React from 'react';
 import MoviesList from './components/MoviesList';
 import './App.css';
 import { useState } from 'react';

 function App() {
   const [movies, setMovies] = useState([]);
   const fetchMovies = async () => {
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
  }

   return (
     <React.Fragment>
       <section>
         <button onClick={fetchMovies}>Fetch Movies</button>
       </section>
       <section>
         <MoviesList movies={movies} />
         <p>Esto puede tardar unos segundos</p>
       </section>
     </React.Fragment>
   );
 }

export default App;

//OTRA OPCION

//clase 179
// import React from 'react';
// import MoviesList from './components/MoviesList';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [movies, setMovies] = useState([]);
  
//   const fetchMovies = async () => {
//   const response = await  fetch('https://swapi.dev/api/films')
//   const data = await response.json(); 
//     const transformedMovies = data.results.map(res => {
//       return {
//         id: res.episode_id,
//         title: res.title,
//         openingText: res.opening_crawl,
//         releaseDate: res.release_date
//       }
//     setMovies(transformedMovies)
//     console.log('movies', movies)
//   });
//   }

//   return (
//     <React.Fragment>
//       <section>
//         <button onClick={fetchMovies}>Fetch Movies</button>
//       </section>
//       <section>
//         <MoviesList movies={movies} />
//         {movies.id}
//       </section>
//     </React.Fragment>
//   );
// }

// export default App;




