import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieReviewApi from '../../services/api-movieReview';
import { Text, UserName } from './Reviews.styled';

const Reviews = () => {
    const [review, setReview] = useState(null);
      const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieReviewApi(movieId)
      .then(response => {
        setReview(response);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return error ? (
    <h2>{error}</h2>
  ) : (
    review && (
      <div>
        {review.results.length > 0 ? (
          <ul>
            {' '}
            {review.results.map(({ id, author, content }) => (
              <li key={id}>
                <UserName>
                  <b>{author}</b>
                </UserName>
                <Text>{content}</Text>
              </li>
            ))}
          </ul>
        ) : (
          `We don't have any reviews for this movie`
        )}
      </div>
    )
  );
};

export default Reviews;
