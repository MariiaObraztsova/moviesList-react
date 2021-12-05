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

