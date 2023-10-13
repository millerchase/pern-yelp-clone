import React, { useState } from 'react';

function AddReview() {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('Rating');

  return (
    <div className="mb-2">
      <form action="">
        <div className="row mb-2">
          <div className="col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-control "
              type="text"
              id="name"
            />
          </div>
          <div className="col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={e => setRating(e.target.value)}
              id="rating"
              className="form-select custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="review">Review</label>
          <textarea
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
            id="review"
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;
