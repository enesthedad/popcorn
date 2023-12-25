import leftArrow from "../arrow.png";
import deleteIcon from "../trash.png";
import StarRating from "./StarRating";
import { useState } from "react";
const MovieDetail = ({
  selectedMovie,
  handleDelete,
  watched,
  handleBack,
  handleRate,
}) => {
  const [rate, setRate] = useState(0);
  const [tempRate, setTempRate] = useState(0);

  const onRate = (rate) => {
    setRate(rate);
    handleRate(watched, selectedMovie, rate);
  };
  const handleHoverIn = (val) => {
    setTempRate(val);
  };

  const handleHoverOut = () => {
    setTempRate(0);
  };
  const findRateIndex = () => {
    return watched.findIndex((mov) => mov.imdbID === selectedMovie.imdbID);
  };
  return (
    <div className='box'>
      <button onClick={handleBack} className='btn-back'>
        <img src={leftArrow} alt='left-arrow' />
      </button>

      {findRateIndex() !== -1 ? (
        <button
          onClick={() => handleDelete(selectedMovie.imdbID)}
          className='btn-delete'
        >
          <img src={deleteIcon} alt='' />
        </button>
      ) : null}

      <div className='info-container'>
        <div className='info-header'>
          <img className='movie-img' src={selectedMovie.Poster} alt='' />
          <div className='info-header-text'>
            <h2 className='movie-header'>{selectedMovie.Title}</h2>
            <p className='movie-rated'>{selectedMovie.Rated}</p>
            <p className='movie-runtime'>
              {selectedMovie.DVD} {selectedMovie.Runtime}
            </p>
            <p className='movie-genre'>{selectedMovie.Genre}</p>
            <p className='movie-rate'>
              ⭐️ {selectedMovie.imdbRating} IMDB Rating
            </p>
          </div>
        </div>
        <div className='info-footer'>
          <div className='rating-container'>
            <h2>How much do you like the movie?</h2>
            <StarRating
              userRate={
                findRateIndex() !== -1
                  ? Number(watched[findRateIndex()].rate)
                  : null
              }
              full='5'
              fillColor='#00adb5'
              strokeColor='#00adb5'
              onRate={onRate}
              rate={rate}
              tempRate={tempRate}
              size='16px'
              basedOn={10}
              handleHoverIn={handleHoverIn}
              handleHoverOut={handleHoverOut}
            />
          </div>
          <p className='movie-plot'>{selectedMovie.Plot}</p>
          <p className='movie-starring'>Starring:{selectedMovie.Actors}</p>
          <p className='movie-director'>Directed by:{selectedMovie.Director}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
