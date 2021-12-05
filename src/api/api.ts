import { Movie } from "../types";

const API_URL = 'http://localhost:8000/api/v1/movies';

export const getAllMovies = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`The problem is here ${error}`);
  }
};

export const createMovie = async (movie: Omit<Movie, 'id'>) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
    },
    body: JSON.stringify(movie),
  });

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const deleteComment = async (movieId: number) => {
  const response = await fetch(`${API_URL}/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0wNVQxNToyNzowOC42MTJaIiwiaWF0IjoxNjM4NzE4MDI4fQ.sCPMPn24hgEA6CIQJADGYh35YjJk11mJI9Zj7KcstXg',
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

