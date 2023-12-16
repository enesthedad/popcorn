import SearchBar from "./SearchBar";
import popCornIcon from "../popcorn.png";
const Navbar = ({ movies, query, handleSearch }) => {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <img src={popCornIcon} alt='' />
        <h1>Grap Popcorn</h1>
      </div>
      <SearchBar query={query} handleSearch={handleSearch} />
      <p className='num-results'>
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};
export default Navbar;
