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
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntry = {
      title,
      description,
      country,
      type,
      year,
      image: url,
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
    <div className="min-h-screen bg-gray-100">
      {/* Top half with image */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url('SquidGames.png')` }}>
        <div className="flex justify-center items-center h-full">
          <h2 className="text-white text-4xl font-bold">ADD A MOVIE/SERIES</h2>
        </div>
      </div>

      {/* Form container */}
      <div className="flex justify-center items-center mt-4 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">
                Movie/Series Name
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">
                Year
              </label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">
                Type
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="radio"
                  value="movie"
                  checked={type === 'movie'}
                  onChange={() => setType('movie')}
                  className="mr-2"
                />
                <span className="mr-4">Movie</span>
                <input
                  type="radio"
                  value="series"
                  checked={type === 'series'}
                  onChange={() => setType('series')}
                  className="mr-2"
                />
                <span>Series</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">
                Upload Movie Poster
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-24 h-32 object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
