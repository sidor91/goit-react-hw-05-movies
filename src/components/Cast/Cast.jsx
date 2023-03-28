import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import movieCastApi from '../../services/api-movieCast';

const Cast = () => {
    const [cast, setCast] = useState(null)
    const { movieId } = useParams();

    useEffect(() => {
      movieCastApi(movieId)
          .then(response => {
              console.log('cast data', response)
              setCast(response)
          })
        .catch(error => console.log(error));
    }, [movieId]);

    cast !== null && console.log(cast)
    
    return (<div>Cast</div>)
}

export default Cast;