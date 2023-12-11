const Rating = ({ emoji, point, children }) => {
  return (
    <p>
      <span>{emoji}</span>
      <span>
        {point} {children}
      </span>
    </p>
  );
};
export default Rating;
