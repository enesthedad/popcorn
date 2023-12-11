import Rating from "./Rating";

const Overall = ({ avgImdbRating, avgUserRating, avgRuntime }) => {
  return (
    <>
      <Rating emoji='⭐️' point={avgImdbRating} />

      <Rating emoji='🌟' point={avgUserRating} />
      <Rating emoji='⏳' point={avgRuntime}>
        min
      </Rating>
    </>
  );
};
export default Overall;
