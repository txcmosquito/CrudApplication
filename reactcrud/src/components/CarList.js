// CarList.js
import React from 'react';
import './CarList.css'; // Import the CSS file

const CarList = ({ cars, onEdit, onDelete }) => {
  return (
    <ul className="car-list">
      {cars.map((car) => (
        <li key={car.id}>
          {car.brand} {car.model} ({car.year})
          <button className="edit-btn" onClick={() => onEdit(car)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(car.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CarList;
