import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import movieSearchApi from '../../services/api-searchMovie';

const Movies = () => {
  const [searchResult, setSearchResult] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

  useEffect(() => {
    if (request === null) {
      return;
    }
    movieSearchApi(request)
      .then(response => setSearchResult(response.results))
      .catch(error => console.log(error));
  }, [request]);

  const onSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.input.value.trim();
    setSearchParams({ query: searchQuery });
  };

  const updateQueryString = e => {
    const nextParams = e.target.value !== '' ? { query: e.target.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <DebounceInput
            name="input"
            type="text"
            placeholder="type movie name"
            value={request}
            minLength={2}
            debounceTimeout={500}
            onChange={updateQueryString}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {searchResult && (
        <ul>
          {searchResult.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
