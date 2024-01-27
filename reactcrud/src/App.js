// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import './App.css';

const API_URL = 'http://localhost:8080/api/cars';

const App = () => {
  const [cars, setCars] = useState([]);
  const [editingCar, setEditingCar] = useState(null);

  const fetchCars = async () => {
    const response = await axios.get(API_URL);
    setCars(response.data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleCreateOrUpdate = async (car) => {
    if (editingCar) {
      await axios.put(`${API_URL}/${editingCar.id}`, car);
    } else {
      await axios.post(API_URL, car);
    }
    setEditingCar(null);
    fetchCars();
  };

  const handleEdit = (car) => {
    setEditingCar(car);
  };

  const handleDelete = async (carId) => {
    await axios.delete(`${API_URL}/${carId}`);
    fetchCars();
  };

  const handleCancel = () => {
    setEditingCar(null);
  };

  return (
    <div className="app-container">
      <h1>Car Store</h1>
      <CarForm
        onSubmit={handleCreateOrUpdate}
        onCancel={handleCancel} // Pass the onCancel function
        initialData={editingCar}
      />
      <CarList cars={cars} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
