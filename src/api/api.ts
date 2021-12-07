import { CreatedMovie } from "../types";
import movies from './movies.txt';

const API_URL = 'http://localhost:8000/api/v1/movies';


// downoload movies to the doker
  export const sendMovies = async () => {
    try {
      const formData = new FormData();
      const formattedMovies = await fetch(movies).then(response => response.blob());

      formData.append("movies", formattedMovies);

      const response = await fetch(`${API_URL}/import`, {
        method: 'POST',
        headers: {
          'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
        },
        body: formData,
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`The problem is here ${error}`);
    }
  };

// downoload movies from server
export const getAllMovies = async () => {
  try {
    const response = await fetch(`${API_URL}?limit=30`, {
      method: 'GET',
      headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`The problem is here ${error}`);
  }
};

export const getMovieByID = async (movieId: number) => {
  try {
    const response = await fetch(`${API_URL}/${movieId}`, {
      method: 'GET',
      headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    throw new Error(`The problem is here ${error}`);
  }
};

// create new movie on server
export const createMovie = async (movie: CreatedMovie) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
    },
    body: JSON.stringify(movie),
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

// delete movie from server
export const deleteMovie = async (movieId: number) => {
  const response = await fetch(`http://localhost:8000/api/v1/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};
