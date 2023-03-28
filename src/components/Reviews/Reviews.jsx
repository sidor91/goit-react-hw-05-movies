import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieReviewApi from '../../services/api-movieReview'

const Reviews = () => {
    const [review, setReview] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
      movieReviewApi(movieId)
          .then(response => {
              console.log('reviews data', response)
              setReview(response)
          })
        .catch(error => console.log(error));
    }, [movieId]);
    
  
  review !== null && console.log(review);
  return <div>Reviews</div>;
};

export default Reviews;