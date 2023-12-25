import "./Error.css";
import searchIcon from "../magnifying-glass.png";
const LoadingError = ({ fetchError }) => {
  return fetchError ? (
    <div className='error-container'>
      <div className='error-img'>
        <div className='circle-border'></div>
        <div className='circle'>
          <div className='error'></div>
        </div>
      </div>
      <div className=''>
        <p className='error-message'>{fetchError}</p>
      </div>
    </div>
  ) : (
    <div className='error-container'>
      <img src={searchIcon} alt='' />
      <p>Search to start</p>
    </div>
  );
};
export default LoadingError;
