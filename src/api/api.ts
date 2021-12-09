import { CreatedMovie } from "../types";
import movies from './movies.txt';

const API_URL = 'http://localhost:8000/api/v1/movies';

  // creating user
  export const createUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         },
        body: "{\n    \"email\": \"mariiaobraztsova0@gmail.com\",\n    \"name\": \"Obraztsova Mariia\",\n    \"password\": \"super-password3000\",\n    \"confirmPassword\": \"super-password3000\"\n}",
        redirect: 'follow',
      });
  
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(`The problem is here ${error}`);
    }
  }

  //creating session
  export const createSession = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/sessions', {
        method: 'POST',
        body: "{\n    \"email\": \"mariiaobraztsova0@gmail.com\",\n    \"password\": \"super-password3000\"\n}",
        redirect: 'follow',
      });
  
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      //const result = await response.json();
      return response.json();
    } catch (error) {
      throw new Error(`The problem is here ${error}`);
    }
  }

// downoload movies to the doker
  export const sendMovies = async (token: string) => {
    try {
      const formData = new FormData();
      const formattedMovies = await fetch(movies).then(response => response.blob());

      formData.append("movies", formattedMovies);

      const response = await fetch(`${API_URL}/import`, {
        method: 'POST',
        headers: {
          'Authorization':token,
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
export const getAllMovies = async (token: string) => {
  try {
    const response = await fetch(`${API_URL}?limit=30`, {
      method: 'GET',
      headers: {
        'Authorization': token,
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

export const getMovieByID = async (movieId: number, token: string) => {
  try {
    const response = await fetch(`${API_URL}/${movieId}`, {
      method: 'GET',
      headers: {
        'Authorization':token,
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
export const createMovie = async (movie: CreatedMovie, token: string) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
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
export const deleteMovie = async (movieId: number, token: string) => {
  const response = await fetch(`http://localhost:8000/api/v1/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': token,
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};
