import { useState } from "react";
import Star from "./Star";
const StarRating = ({
  basedOn = 5,
  fillColor = "#FDD835",
  strokeColor = "#FDD835",
  size = "40px",
}) => {
  const [rate, setRate] = useState(0);
  const [tempRate, setTempRate] = useState(0);

  const starContainer = {
    display: "flex",
    gap: "10px",
  };
  const onRate = (rate) => {
    setRate(rate);
  };

  return (
    <div style={starContainer}>
      {Array.from({ length: basedOn }, (_, i) => (
        <Star
          fillColor={fillColor}
          strokeColor={strokeColor}
          size={size}
          onHoverIn={() => setTempRate(i + 1)}
          onHoverOut={() => setTempRate(0)}
          full={tempRate ? tempRate >= i + 1 : rate >= i + 1}
          //   onMouseEnter={() => handleHover(i + 1)}
          //   onMouseLeave={() => handleHover(i + 1)}
          onRate={() => onRate(i + 1)}
          key={i + 1}
        />
      ))}

      <p>{tempRate || rate || ""}</p>
    </div>
  );
};

export default StarRating;
