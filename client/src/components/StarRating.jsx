import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    switch (true) {
      case i <= rating:
        stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>);
        break;

      case i - 0.5 <= rating:
        stars.push(
          <i key={i} className="fa-solid fa-star-half-stroke text-warning"></i>
        );
        break;

      case i > rating:
        stars.push(<i key={i} className="fa-regular fa-star text-warning"></i>);
        break;

      default:
        console.error('error in star rating component');
        break;
    }
  }

  return <>{stars}</>;
};

export default StarRating;
