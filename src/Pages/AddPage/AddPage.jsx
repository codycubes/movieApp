import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('movie'); // Default to movie
  const [year, setYear] = useState('');
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntry = {
      title,
      description,
      country,
      type,
      year,
      image: url
    };

    try {
      await axios.post('http://localhost:8888/MovieData', newEntry);
      alert('Entry added successfully!');
      navigate('/'); // Redirect to the home page or any other page after submission
    } catch (error) {
      console.error('There was an error submitting the data!', error);
      alert('Failed to submit the data. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='formSection'>
          <div className='text'>
            <label>Add A Movie/Series</label>
          </div>

          <div className='group'>
            <div className="formGroup">
              <label>Movie/Series Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label>Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label>Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label>Year</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <label>Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Image URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>

            <div className="formGroup">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
