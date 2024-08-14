import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplayMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
    url: '' // Add the URL to formData
  });

  useEffect(() => {
    axios.get(`http://localhost:8888/MovieData/${id}`)
      .then((response) => {
        setItem(response.data);
        setFormData({
          title: response.data.title,
          description: response.data.description,
          year: response.data.year,
          url: response.data.url || '' // Set the URL in formData, with a fallback
        });
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8888/MovieData/${id}`)
      .then(() => {
        navigate('/');
      });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8888/MovieData/${id}`, formData)
      .then(() => {
        setItem(formData);
        setIsEditing(false);
      });
  };

  if (!item) return <div className="text-center text-gray-500">Loading...</div>;

  console.log(item.url)
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Image with Title */}
      <div className="relative w-full h-64 bg-gray-300 top-0">
        <img
          src={item.url} // Provide a fallback image
          alt={item.title}
          className="object-cover w-full h-full opacity-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          {item.title}
        </h1>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center bg-white p-8 shadow-md">
        <div className="max-w-6xl w-full mt-8 flex flex-col md:flex-row items-center">
          <img className="w-64 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-8" key={item.id} src={item.url} alt={item.title} />
          <div className="text-left">
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-gray-600"><strong>Country:</strong> {item.country}</p>
            <p className="text-gray-600"><strong>Genre:</strong> {item.genre}</p>
            <p className="text-gray-600"><strong>Year:</strong> {item.year}</p>
            <p className="text-gray-600"><strong>Type:</strong> {item.type}</p>
            <div className="mt-6">
              <button
                onClick={handleEditToggle}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {isEditing && (
          <form onSubmit={handleEditSubmit} className="mt-8 w-full max-w-3xl">
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-gray-600">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-gray-600">Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-gray-600">Year:</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-gray-600">Image URL:</label>
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Save
            </button>
          </form>
        )}
      </main>

      {/* Footer */}
      {/* <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-bold">Enter-Stream</div>
          <nav className="flex space-x-4">
            <a href="/" className="hover:text-gray-400">Movies</a>
            <a href="/" className="hover:text-gray-400">Series</a>
          </nav>
        </div>
      </footer> */}
    </div>
  );
};

export default DisplayMovie;
