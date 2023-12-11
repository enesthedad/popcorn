import { useState } from "react";
import Navbar from "./pages/Navbar";

import Box from "./pages/Box";

import tempMovieData from "./assets/movies.json";
import tempWatchedData from "./assets/watchedMovies.json";
import StarRating from "./pages/StarRating";
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState(tempMovieData.tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData.tempWatchedData);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <Navbar movies={movies} />
      <StarRating />
      <StarRating basedOn='10' />

      <main className='main'>
        <Box
          movies={movies}
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
          isSearch={false}
        />
        <Box
          movies={movies}
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
          isSearch={true}
        />
      </main>
    </>
  );
}
