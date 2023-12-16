import Rating from "./Rating";

const MovieCard = ({
  selectedMovie,
  watched,
  movie,
  isSeen,
  handleClick,
  handleBack,
}) => {
  return isSeen ? (
    <li onClick={() => handleClick(movie.imdbID)}>
      <>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />

        <div className='movie-card-text'>
          <h3>{movie.Title}</h3>
          <div className='movie-card-rating'>
            <Rating emoji='⭐️' point={movie.imdbRating} />

            <Rating emoji='🌟' point={movie.rate.toFixed(1)} />

            <Rating emoji='⏳' point={movie.Runtime} />
          </div>
        </div>
      </>
    </li>
  ) : (
    <li
      handleBack={handleBack}
      onClick={() => handleClick(movie.imdbID)}
      key={movie.imdbID}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />

      <div className='movie-card-text'>
        <h3>{movie.Title}</h3>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
