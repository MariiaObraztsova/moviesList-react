import React, { useState } from 'react';
import './NewMovieForm.css'
import { createMovie } from '../../api/api';

type Props = {
  updateMovies: () => void,
}

export const NewMovieForm: React.FC<Props> = React.memo(
    ({ updateMovies }) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(2021);
    const [format, setFormat] = useState('');
    const [actors, setActors] = useState<string[]>([]);
    const [unformattedActors, setUnformattedActors] = useState<string>('');

    // processing controled inputs
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

          setActors(actors);
          break;
        default:;
      }
    }

    // clear form fields afrter submit
    const clearForm = () => {
      setTitle('');
      setYear(2021);
      setFormat('');
      setActors([]);
      setUnformattedActors('');
    }

    // processing form submit
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const tokenForLogin = localStorage.getItem('token') || '';
      const newMovie = await createMovie({
        title,
        year,
        format,
        actors,
      }, tokenForLogin);

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
