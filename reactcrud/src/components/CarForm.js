import React, { useState, useEffect } from 'react';
import './CarForm.css';

const CarForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    ...initialData,
  });

  useEffect(() => {
    setFormData({ brand: '', model: '', year: '', ...initialData });
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ brand: '', model: '', year: '' }); // Reset form data after submission
  };

  const handleCancel = () => {
    setFormData({ brand: '', model: '', year: '' }); // Reset form data on cancel
    onCancel();
  };

  return (
    <form className="car-form" onSubmit={handleSubmit}>
      <label>
        Brand:
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
      </label>
      <br />
      <label>
        Model:
        <input type="text" name="model" value={formData.model} onChange={handleChange} />
      </label>
      <br />
      <label>
        Year:
        <input type="number" name="year" value={formData.year} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CarForm;
