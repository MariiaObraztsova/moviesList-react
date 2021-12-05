import React, { useEffect, useState } from 'react';
import './App.css';
import './normalization.css'
import { Movie } from './types';

import { MoviesList } from './components/MoviesList/MoviesList';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

const moviesFromDoc: Movie[] = [
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

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [titleToSearch, setTitleToSearch] = useState('');
  const [actorToSearch, setActorToSearch] = useState('');
  const [isSortedAlphabetically, setIsSortedAlphabetically] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(0);

  useEffect(() => {
    const filterMovies = () => {
      return moviesFromDoc
      .filter(movie => {
        if (titleToSearch) {
          return movie.title.toLowerCase().includes(titleToSearch)
        }
  
        return movie;
      })
      .filter(movie => {
        if (actorToSearch) {
          return movie.actors.some(actor => actor.toLowerCase().includes(actorToSearch))
        }
  
        return movie;
      })
      .sort((movie1, movie2) => {
        if (isSortedAlphabetically) {
          return movie1.title.localeCompare(movie2.title);
        }
  
        return 0;
      });
    }

    const moviesFromServer = filterMovies();
    setMovies(moviesFromServer);
  }, [titleToSearch, actorToSearch, isSortedAlphabetically])

  // processing controlled inputs for searching by title and actor
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    switch (name) {
      case 'titleToSearch':
        setTitleToSearch(value.toLocaleLowerCase());
        break;
      case 'actorToSearch':
        setActorToSearch(value.toLocaleLowerCase());
        break;
      default:;
    }
  }

  // reset all filters and sorting
  const handleResetButton = () => {
    setTitleToSearch('');
    setActorToSearch('');
    setIsSortedAlphabetically(false);
  }

  // set movie id to render movie details
  const seeMovieDetails = (movieId: number) => {
    setSelectedMovieId(movieId);
  }

  // reset rendering movie details
  const closeMovieDetails = () => {
    setSelectedMovieId(0);
  }

  return (
    <div className="App">
      <header className="App__header">
        <input
          type="text"
          placeholder="Enter title"
          value={titleToSearch}
          name="titleToSearch"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Enter actor"
          value={actorToSearch}
          name="actorToSearch"
          onChange={handleInputChange}
        />

        <button
          type="button"
          onClick={() => setIsSortedAlphabetically(true)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={handleResetButton}
        >
          Reset
        </button>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          {movies && (
            <MoviesList
              selectedMovieId={selectedMovieId}
              preparedMovies={movies}
              seeMovieDetails={seeMovieDetails}
              closeMovieDetails={closeMovieDetails}
            />
          )}
        </div>

        <div className="App__content">
          {selectedMovieId > 0 && (
            <MovieDetails
              movieId={selectedMovieId}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
