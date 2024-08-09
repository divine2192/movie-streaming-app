import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies.json';
import VideoPlayer from './VideoPlayer';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <VideoPlayer url={movie.url} />
    </div>
  );
};

export default MovieDetail;
