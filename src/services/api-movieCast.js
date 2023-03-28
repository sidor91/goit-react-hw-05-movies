const movieCastApi = movieId => {
  const API_KEY = 'c38399f3218c9d1cc74e683392b12119';
  const BASE_URL = 'https://api.themoviedb.org/3/movie/';
  return fetch(`${BASE_URL}${movieId}/credits?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return new Promise.reject(
      new Error(`Something went wrong. Please, try again later`)
    );
  });
};

export default movieCastApi;
