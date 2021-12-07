import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './normalization.css'
import { Movie } from './types';
import { getAllMovies, getMovieByID } from './api/api';

import { MoviesList } from './components/MoviesList/MoviesList';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { NewMovieForm } from './components/NewMovieForm/NewMovieForm';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [titleToSearch, setTitleToSearch] = useState('');
  const [actorToSearch, setActorToSearch] = useState('');
  const [isSortedAlphabetically, setIsSortedAlphabetically] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(0);

  const loadDetailedMovies = async () => {
    const movies: Movie[] = await getAllMovies();
    const moviesIds = movies.map(movie => movie.id);
    console.log(moviesIds);

    const detailedMovies = await Promise.all(moviesIds.map((id: number) =>getMovieByID(id)));

    setMovies(detailedMovies);
    console.log(detailedMovies);
  };

  useEffect(() => {
    loadDetailedMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    if (movies) {
      return movies
        .filter(movie => {
          if (titleToSearch) {
            return movie.title.toLowerCase().includes(titleToSearch)
          }

          return movie;
        })
        .filter(movie => {
          if (actorToSearch) {
            return movie.actors.some(actor => actor.name.toLowerCase().includes(actorToSearch))
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
  }, [movies, titleToSearch, actorToSearch, isSortedAlphabetically]);

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
        <div className="App__form">
          <NewMovieForm updateMovies={loadDetailedMovies} />
        </div>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          {filteredMovies && (
            <>
              <div className="App__filters">
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
              </div>

              <MoviesList
                selectedMovieId={selectedMovieId}
                preparedMovies={filteredMovies}
                seeMovieDetails={seeMovieDetails}
                closeMovieDetails={closeMovieDetails}
                updateMovies={loadDetailedMovies}
              />
            </>
          )}
        </div>

        <div className="App__content">
          {selectedMovieId > 0 && filteredMovies && (
            <MovieDetails
              movieId={selectedMovieId}
              movies={filteredMovies}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
