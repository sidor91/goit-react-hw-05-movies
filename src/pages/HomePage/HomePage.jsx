import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import theMostPopularApi from '../../services/api-theMostPopular';

export const HomePage = () => {
  const [movieList, setMovieList] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    theMostPopularApi()
      .then(response => setMovieList(response.results))
      .catch(error => setError(error));
  }, []);

  const moviesMarkup = (
    <>
      <h1>Trending today</h1>
      <ul>
        {movieList &&
          movieList.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );

  // console.log('movieList', movieList);

  return <div>{error === null ? moviesMarkup : <h2>{error.message}</h2>}</div>;
};
