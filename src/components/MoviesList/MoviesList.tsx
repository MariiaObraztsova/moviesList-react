import React from 'react';
import { Movie } from '../../types';
import './MoviesList.css';

import { deleteMovie } from '../../api/api';

type Props = {
  selectedMovieId: number,
  preparedMovies: Movie[],
  seeMovieDetails: (movieId: number) => void,
  closeMovieDetails: () => void,
  updateMovies: (token: string) => Promise<void>,
}

export const MoviesList: React.FC<Props> = ({
  selectedMovieId,
  preparedMovies,
  seeMovieDetails,
  closeMovieDetails,
  updateMovies,
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

            <div className="MovieList__buttons">
              <button
                type="button"
                onClick={() => {
                  const tokenForLogin = localStorage.getItem('token') || '';
                  deleteMovie(movie.id, tokenForLogin);
                  updateMovies(tokenForLogin);
                }}
              >
                Delete movie
              </button>

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
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
