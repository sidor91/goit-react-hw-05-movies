import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieCastApi from '../../services/api-movieCast';
import { Text, Photo, List, ListItem } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieCastApi(movieId)
      .then(response => {
        setCast(response);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const PHOTO_PLACEHOLDER =
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

  return error ? (
    <h2>{error}</h2>
  ) : (
    cast && (
      <div>
        <List>
          {cast.cast.map(({ cast_id, profile_path, name, character }) => (
            <ListItem key={cast_id}>
              <Photo
                src={
                  profile_path
                    ? `${IMAGE_BASE_URL}${profile_path}`
                    : `${PHOTO_PLACEHOLDER}`
                }
                alt=""
              />
              <Text>{name}</Text>
              <Text>
                <b>Character</b>: {character}
              </Text>
            </ListItem>
          ))}
        </List>
      </div>
    )
  );
};

export default Cast;
