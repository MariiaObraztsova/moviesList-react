import React, { useEffect, useState } from 'react';
import { Movie } from '../../types';
import './MovieDetails.css';

const movies: Movie[] = [
  {
    id: 1,
    title: "Casablanca",
    year: 1942,
    format: "DVD",
    actors: [
        "Humphrey Bogartt",
        "Ingrid Bergman",
        "Claude Rains",
        "Peter Lorre"
    ]
  },
  {
    id: 2,
    title: "Blazing Saddles",
    year: 1974,
    format: "VHS",
    actors: [
      "Mel Brooks", "Clevon Little", "Harvey Korman", "Gene Wilder", "Slim Pickens", "Madeline Kahn"
    ]
  }
];

type Props = {
  movieId: number,
}

export const MovieDetails: React.FC<Props> = React.memo(
  ({ movieId }) => {
    const [ movie, setMovie ] = useState<Movie>();
  
    // const loadMovieDetails = () => {
    //   const movieFromServer = movies.find(item => item.id === movieId);
  
    //   setMovie(movieFromServer);
    // }
  
    useEffect(() => {
      const movieFromServer = movies.find(item => item.id === movieId);
  
      setMovie(movieFromServer);
    }, [movieId]);

    return (
      <div className="MovieDetail">
        {movie ? (
        <>
          <h2>
            {`${movie.title}, ${movie?.year}`}
          </h2>

          <p>
            {`Format: ${movie.format}`}
          </p>

          <ul className="MovieDetail__actors">
            Actors:
            {movie.actors.map(actor => (
              <li
                key={actor}
                className="MovieDetail__actor"
              >
                {actor}
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
