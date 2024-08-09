import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../data/movies.json';

const MovieList = () => {
  return (
    <div>
      <h1>Christian Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
