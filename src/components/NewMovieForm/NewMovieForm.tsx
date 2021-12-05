import React, { useState } from 'react';
import { createMovie } from '../../api/api';

export const NewMovieForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(2021);
  const [format, setFormat] = useState('');
  const [actors, setActors] = useState<string[]>([]);

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
        const actors = value.split(',');

        actors.forEach(actor => actors.push(actor));
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

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="year">
        <input
          type="text"
          id="year"
          placeholder="Enter year"
          value={year}
          name="year"
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="format">
        <select
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
        <input
          type="text"
          id="actors"
          placeholder="Enter actors divided by , "
          value={actors}
          name="actors"
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">
        Add a movie
      </button>
    </form>
  )
}