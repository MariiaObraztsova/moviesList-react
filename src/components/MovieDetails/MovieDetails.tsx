import React, { useEffect, useState } from 'react';
import { Movie } from '../../types';
import './MovieDetails.css';

type Props = {
  movieId: number,
  movies: Movie[]
}

export const MovieDetails: React.FC<Props> = React.memo(
  ({ movieId, movies }) => {
    const [ movie, setMovie ] = useState<Movie>();

    // downoload movie details by movie id
    const loadMovieDetails = async () => {
      const selectedMovie = movies.find(movie => movie.id === movieId);

      setMovie(selectedMovie);
    };

    useEffect(() => {
      loadMovieDetails();
    }, [movieId]);

    return (
      <div className="MovieDetail">
        {movie ? (
        <>
          <h2>
            {`${movie.title}, ${movie.year}`}
          </h2>

          <p>
            {`Format: ${movie.format}`}
          </p>

          <ul className="MovieDetail__actors">
            Actors:
            {movie.actors.map(actor => (
              <li
                key={actor.name}
                className="MovieDetail__actor"
              >
                {actor.name}
              </li>
            ))}
          </ul>
        </>
        ) : (
          <h2>
            No movie found
          </h2>
        )}
      </div>
    )
  }
);
