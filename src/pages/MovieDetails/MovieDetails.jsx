import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import movieDetailsApi from '../../services/api-movieDetails';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();

  useEffect(() => {
    movieDetailsApi(movieId)
      .then(response => {
        setMovie(response);
        console.log('movie details data',response);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);


  return (
    movie && (
      <>
        <div
          style={{
            display: 'flex',
          }}
        >
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" />
          <div>
            <h2>
              {movie.title} {movie.release_date}
            </h2>
          </div>
        </div>
        <h6>Addititonal information</h6>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </>
    )
  );
};


// poster_path
// title
// release_date
// vote_average
// overview
// genres (может массив)