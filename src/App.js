import { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import Box from "./pages/Box";
import LoadingError from "./pages/LoadingError";
import tempMovieData from "./assets/movies.json";
import tempWatchedData from "./assets/watchedMovies.json";

const average = (arr) => {
  const avg = arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return Number(avg).toFixed(2);
};
const KEY = "a72c6972";
export default function App() {
  // USEEFECT FOR FETCH DATA FROM API

  // USESTATES
  const [isLoading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  // FOR MOVIE DB
  const [selectedId, setSelectedId] = useState(null);
  const [selectedMovie, setMovie] = useState(
    watched.length === 0 ? "" : watched[0]
  );
  // FOR SEARCH BAR
  const [query, setQuery] = useState("matrix");
  // CALC OF AVERAGE
  const avgImdbRating = average(
    watched.map((movie) => Number(movie.imdbRating))
  );
  const avgUserRating = average(watched.map((movie) => Number(movie.rate)));
  const avgRuntime = average(
    watched.map((movie) => Number(movie.Runtime.split(" ")[0]))
  );
  useEffect(() => {
    // Load watched movies from localStorage
    const storedWatchedMovies = localStorage.getItem("watchedMovies");
    if (storedWatchedMovies) {
      setWatched(JSON.parse(storedWatchedMovies));
    }
  }, []);
  // HANDLING EVENTS
  const handleRate = (watched, movie, rate) => {
    const updatedWatched =
      watched.findIndex((mov) => mov.imdbID === selectedId) !== -1
        ? watched.map((mov) =>
            mov.imdbID === selectedId ? { ...mov, rate: rate } : mov
          )
        : [...watched, { ...movie, rate: rate }];

    // Save the updated watched list to localStorage
    localStorage.setItem("watchedMovies", JSON.stringify(updatedWatched));

    // Update the state with the new watched list
    setWatched(updatedWatched);
  };
  // FETCH WATCHED

  const handleDelete = (id) => {
    setWatched(watched.filter((mov) => mov.imdbID !== id));
    setSelectedId(null);
  };
  const handleSearch = (_data) => {
    setQuery(_data);
  };
  const handleClick = (id) => {
    setSelectedId(id);
  };
  const handleBack = () => {
    setSelectedId(null);
  };
  // FETCH LOCALE

  // FETCHING THE DATA FROM OMDB API
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // SET LOADING TRUE FOR RENDER LOADER
        setLoading(true);
        const resp = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        // TO CATCH ERROR DURING PROMISE
        if (!resp.ok) {
          throw new Error("Something go wrong when fetching the data...");
        }
        const data = await resp.json();
        // ERROR AFTER FETCH
        if (!data) {
          throw new Error("No film found");
        }
        // NO MOVIE FOUND
        if (data.Response === "False") {
          throw new Error("No film found!");
        }
        setMovies(data.Search);
      } catch (err) {
        // TO RENDER ERROR MESSAGES
        setFetchError(err.message);
      } finally {
        // CLOSING LOADER
        setLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setFetchError("");
      return;
    }
    fetchMovie();
  }, [query]);

  // Fetching movie with detail
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // SET LOADING TRUE FOR RENDER LOADER
        setLoading(true);
        const resp = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        // TO CATCH ERROR DURING PROMISE
        if (!resp.ok) {
          throw new Error("Something go wrong when fetching the data...");
        }
        const data = await resp.json();
        // ERROR AFTER FETCH
        if (!data) {
          throw new Error("No film found");
        }
        // NO MOVIE FOUND
        if (data.Response === "False") {
          throw new Error("No film found!");
        }
        setMovie(data);
      } catch (err) {
        // TO RENDER ERROR MESSAGES
        setFetchError(err.message);
      } finally {
        // CLOSING LOADER
        setLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setFetchError("");
      return;
    }
    fetchMovie();
  }, [selectedId]);
  return (
    <>
      <Navbar movies={movies} handleSearch={handleSearch} query={query} />
      <main className='main'>
        <Box
          movies={movies}
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
          isSearch={false}
          isLoading={isLoading}
          query={query}
          fetchError={fetchError}
          handleClick={handleClick}
          selectedId={selectedId}
          handleBack={handleBack}
          selectedMovie={selectedMovie}
          handleRate={handleRate}
          handleDelete={handleDelete}
        />
        <Box
          movies={movies}
          watched={watched}
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
          isSearch={true}
          isLoading={isLoading}
          handleClick={handleClick}
          selectedId={selectedId}
          handleBack={handleBack}
          selectedMovie={selectedMovie}
          handleRate={handleRate}
          handleDelete={handleDelete}
        />
      </main>
    </>
  );
}
