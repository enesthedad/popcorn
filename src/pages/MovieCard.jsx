import Rating from "./Rating";

const MovieCard = ({ movie, isSeen }) => {
  return isSeen ? (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <Rating emoji='⭐️' point={movie.imdbRating} />

        <Rating emoji='🌟' point={movie.userRating} />

        <Rating emoji='⏳' point={movie.runtime}>
          min
        </Rating>
      </div>
    </li>
  ) : (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
