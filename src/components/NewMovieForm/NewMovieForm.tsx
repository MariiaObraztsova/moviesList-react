import React, { useState } from 'react';
import './NewMovieForm.css'
import { createMovie } from '../../api/api';
import { Actor } from '../../types';

type Props = {
  updateMovies: () => void,
}

export const NewMovieForm: React.FC<Props> = React.memo(
    ({ updateMovies }) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(2021);
    const [format, setFormat] = useState('');
    const [actors, setActors] = useState<Actor[]>([]);
    const [unformattedActors, setUnformattedActors] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = event.target

      switch (name) {
        case 'title':
          setTitle(value);
          break;
        case 'year':
          setYear(Number(value));
          break;
        case 'format':
          setFormat(value);
          break;
        case 'actors':
          setUnformattedActors(value);
          const actors = value.split(',');

          const preparedActors = actors.map(actor => {
            const actorToAdd = {
              name: actor,
            }
            return actorToAdd;
          });

          setActors(preparedActors);
          break;
        default:;
      }
    }

    const clearForm = () => {
      setTitle('');
      setYear(2021);
      setFormat('');
      setActors([]);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const newMovie = await createMovie({
        title,
        year,
        format,
        actors,
      });

      if (newMovie) {
        updateMovies();
      }

      clearForm();
    };

    return (
      <form
        className="NewMovieForm"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">
          Title:
          <input
            className="NewMovieForm__input"
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            name="title"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="year">
          Year:
          <input
            className="NewMovieForm__input"
            type="text"
            id="year"
            placeholder="Enter year"
            value={year}
            name="year"
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="format">
          Format:
          <select
            className="NewMovieForm__input"
            id="format"
            value={format}
            name="format"
            onChange={handleInputChange}
          >
            <option value="">
              Choose a format
            </option>

            <option value="VHS">
              VHS
            </option>

            <option value="DVD">
              DVD
            </option>

            <option value="Blu-Ray">
              Blu-Ray
            </option>
          </select>
        </label>

        <label htmlFor="actors">
          Actors:
          <input
            className="NewMovieForm__input"
            type="text"
            id="actors"
            placeholder="Enter actors divided by , "
            value={unformattedActors}
            name="actors"
            onChange={handleInputChange}
          />
        </label>

        <button
          type="submit"
          className="NewMovieForm__button"
        >
          Add a movie
        </button>
      </form>
    )
  }
)