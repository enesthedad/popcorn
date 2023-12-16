import { useState } from "react";
import Star from "./Star";
const StarRating = ({
  basedOn = 5,
  fillColor = "#FDD835",
  strokeColor = "#FDD835",
  size = "16px",
  rate = "5",
  tempRate,
  onRate,
  handleHoverIn,
  handleHoverOut,
  userRate = 3,
}) => {
  return (
    <div className='star-container'>
      <div className='stars'>
        {Array.from({ length: basedOn }, (_, i) => (
          <Star
            fillColor={fillColor}
            strokeColor={strokeColor}
            size={size}
            onHoverIn={() => handleHoverIn(i + 1)}
            onHoverOut={() => handleHoverOut()}
            full={
              tempRate
                ? tempRate >= i + 1
                : userRate
                ? userRate >= i + 1
                : rate >= i + 1
            }
            //   onMouseEnter={() => handleHover(i + 1)}
            //   onMouseLeave={() => handleHover(i + 1)}
            onRate={() => onRate(i + 1)}
            key={i + 1}
          />
        ))}
      </div>

      <p className='rate'>{tempRate || rate || userRate || ""}</p>
    </div>
  );
};

export default StarRating;
