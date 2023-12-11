const Button = ({ isThisOpen, handleOpen }) => {
  return (
    <button className='btn-toggle' onClick={() => handleOpen((open) => !open)}>
      {isThisOpen ? "–" : "+"}
    </button>
  );
};

export default Button;
