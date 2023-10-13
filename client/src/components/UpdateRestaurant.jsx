import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = props => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
        name,
        location,
        price_range: priceRange
      });
      navigate('/');
      console.log(`${updatedRestaurant.name} updated successfully`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            type="text"
            className="form-control"
            placeholder="location"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price_range" className="form-label">
            Price Range
          </label>
          <select
            id="price_range"
            value={priceRange}
            onChange={e => setPriceRange(e.target.value)}
            className="form-select "
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary mt-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
