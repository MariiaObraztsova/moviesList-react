import React from 'react';
import { Movie } from '../../types';
import './MoviesList.css';

type Props = {
  selectedMovieId: number,
  preparedMovies: Movie[],
  seeMovieDetails: (movieId: number) => void,
  closeMovieDetails: () => void,
}

export const MoviesList: React.FC<Props> = ({
  selectedMovieId,
  preparedMovies,
  seeMovieDetails,
  closeMovieDetails,
}) => {
  return (
    <div className="MoviesList">
      <h2>
        Movies List
      </h2>

      <ul className="MoviesList__list">
        {preparedMovies.map(movie => (
          <li
            key={movie.id}
            className="MoviesList__item"
          >
            {`${movie.title}, ${movie.year}`}
            {movie.id === selectedMovieId ? (
              <button
              type="button"
              onClick={closeMovieDetails}
            >
              Close
            </button>
            ) : (
              <button
                type="button"
                onClick={() => seeMovieDetails(movie.id)}
              >
              View details
            </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}