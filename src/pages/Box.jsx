import Button from "./Button";
import Summary from "./Summary";
import MovieCard from "./MovieCard";
import { useState } from "react";
const Box = ({
  movies,
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  isSearch,
}) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return isSearch ? (
    <div className='box'>
      <Button isThisOpen={isOpen2} handleOpen={setIsOpen2} />

      {isOpen2 && (
        <>
          <Summary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />

          <ul className='list'>
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} isSeen={true} />
            ))}
          </ul>
        </>
      )}
    </div>
  ) : (
    <div className='box'>
      <Button isThisOpen={isOpen1} handleOpen={setIsOpen1} />
      {isOpen1 && (
        <ul className='list'>
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} isSeen={false} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Box;
