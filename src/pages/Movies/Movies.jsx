import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import movieSearchApi from '../../services/api-searchMovie';

export const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null)

    useEffect(() => {
        if (query === '') {
            return;
        }
        movieSearchApi(query)
          .then(response => setSearchResult(response.results))
          .catch(error => console.log(error));
    }, [query]);

    const onSubmit = (e) => {
        e.preventDefault();
        setQuery(e.target.elements.input.value);
    }

    
    return (
      <>
        <div>
          <form onSubmit={onSubmit}>
            <input name="input" type="text" placeholder="type movie name" />
            <button type="submit">Search</button>
          </form>
        </div>
        {searchResult && (
          <ul>
            {searchResult.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
};
