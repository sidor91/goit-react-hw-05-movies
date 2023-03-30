import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import theMostPopularApi from '../../services/api-theMostPopular';
import { MovieLink, List, ListItem, Title } from './HomePage.styled';

const HomePage = () => {
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
      <Title>Trending today</Title>
      <List>
        {movieList &&
          movieList.map(({ id, title }) => (
            <ListItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieLink>
            </ListItem>
          ))}
      </List>
    </>
  );

  return <div>{error === null ? moviesMarkup : <h2>{error.message}</h2>}</div>;
};

export default HomePage;