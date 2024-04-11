import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const params = useParams();
  const id = Number(params.movieId);

  const movieChoice = movies.find(el => el.id === Number(movieId));

  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
