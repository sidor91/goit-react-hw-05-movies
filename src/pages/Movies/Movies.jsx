import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import movieSearchApi from '../../services/api-searchMovie';

 const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null)
    const location = useLocation();

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
                <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
 };

export default Movies;
