import Overall from "./Overall";
import WatchedTable from "./WatchedTable";

const Summary = ({ watched, avgImdbRating, avgUserRating, avgRuntime }) => {
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <WatchedTable length={watched.length} />
        <Overall
          avgImdbRating={avgImdbRating}
          avgUserRating={avgUserRating}
          avgRuntime={avgRuntime}
        />
      </div>
    </div>
  );
};
export default Summary;
