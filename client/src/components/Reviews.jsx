import React from 'react';
import StarRating from '../components/StarRating';

function Reviews() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card text-white bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={3} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant was awesome!</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card text-white bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={4} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant was awesome!</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card text-white bg-primary">
          <div className="card-header d-flex justify-content-between">
            <span>Joan</span>
            <span>
              <StarRating rating={5} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">This restaurant was awesome!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
