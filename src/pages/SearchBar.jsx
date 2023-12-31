const SearchBar = ({ query, handleSearch }) => {
  return (
    <>
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};
export default SearchBar;
