import Button from "./Button";
import Summary from "./Summary";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import LoadingError from "./LoadingError";
import { useState } from "react";
import MovieDetail from "./MovieDetail";
const Box = ({
  movies,
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
  isSearch,
  isLoading,
  fetchError,
  selectedId,
  handleClick,
  handleBack,
  selectedMovie,
  handleRate,
  handleDelete,
}) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  return isLoading ? (
    <div className='box error-container'>
      <Loading />
    </div>
  ) : fetchError === "" ? (
    <div className='box error-container'>
      <LoadingError fetchError={fetchError} />
    </div>
  ) : isSearch ? (
    selectedId ? (
      <MovieDetail
        handleRate={handleRate}
        selectedMovie={selectedMovie}
        handleBack={handleBack}
        watched={watched}
        handleDelete={handleDelete}
      />
    ) : (
      <div className='box'>
        <h2 className='box-header'>WATCHED LIST</h2>
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
                <MovieCard
                  handleClick={handleClick}
                  movie={movie}
                  key={movie.imdbID}
                  isSeen={true}
                  selectedMovie={selectedMovie}
                  watched={watched}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  ) : (
    <div className='box'>
      <h2 className='box-header'>SEARCH MOVIES</h2>
      <Button isThisOpen={isOpen1} handleOpen={setIsOpen1} />
      {isOpen1 && (
        <ul className='list'>
          {movies?.map((movie) => (
            <MovieCard
              handleClick={handleClick}
              movie={movie}
              key={movie.imdbID}
              isSeen={false}
              watched={watched}
              selectedMovie={selectedMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Box;
