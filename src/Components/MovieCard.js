import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} style={{ width: '100%' }} />
      <Link to={`/movie/${movie.id}`}>Details</Link>
    </Card>
  );
};

export default MovieCard;
