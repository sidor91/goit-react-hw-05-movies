import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { RotatingLines } from 'react-loader-spinner';
import movieDetailsApi from '../../services/api-movieDetails';
import {
  Poster,
  Text,
  Title,
  SubTitle,
  NavigationLink,
  AdditionalInfo,
} from './MovieDetails.styled';


const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();

  useEffect(() => {
    movieDetailsApi(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return error ? (
    <h2>{error}</h2>
  ) : (
    movie && (
      <>
        <NavigationLink to={backLinkHref.current}>← Go back</NavigationLink>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Poster src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" />
          <div>
            <Title>
              {movie.title} ({format(parseISO(movie.release_date), 'yyyy')})
            </Title>
            <Text>User score: {Math.floor(movie.vote_average * 10)}%</Text>
            <SubTitle>Overview</SubTitle>
            <Text>{movie.overview}</Text>
            <SubTitle>Genres</SubTitle>
            <Text>{movie.genres.map(genre => `${genre.name} `)}</Text>
          </div>
        </div>
        <AdditionalInfo>
          <SubTitle>Addititonal information</SubTitle>
          <ul>
            <li>
              <NavigationLink to="cast">Cast</NavigationLink>
            </li>
            <li>
              <NavigationLink to="reviews">Reviews</NavigationLink>
            </li>
          </ul>
        </AdditionalInfo>
        <Suspense
          fallback={
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetails;
