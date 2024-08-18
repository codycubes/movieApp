import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// DisplayMovie component displays details of a selected movie or series, with options to edit or delete the entry
const DisplayMovie = () => {
  // Extract the 'id' from the URL parameters
  const { id } = useParams();
  // useNavigate hook allows programmatic navigation
  const navigate = useNavigate();
  // State to store the fetched movie or series data
  const [item, setItem] = useState(null);
  // State to manage whether the user is in editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the form data for editing
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
    url: '' // Initial URL value for the image
  });

  // useEffect hook to fetch the movie/series data when the component mounts or when 'id' changes
  useEffect(() => {
    axios.get(`http://localhost:8888/MovieData/${id}`)
      .then((response) => {
        // Set the fetched data to 'item' state
        setItem(response.data);
        // Populate formData state with the fetched data for editing
        setFormData({
          title: response.data.title,
          description: response.data.description,
          year: response.data.year,
          url: response.data.url || '' // Fallback in case the URL is empty
        });
      });
  }, [id]); // Dependency array includes 'id' to re-fetch data if it changes

  // Function to handle deletion of the movie/series
  const handleDelete = () => {
    axios.delete(`http://localhost:8888/MovieData/${id}`)
      .then(() => {
        // Navigate back to the homepage after deletion
        navigate('/');
      });
  };

  // Function to toggle editing mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Function to handle changes in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update formData state with the new input value
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission for saving edited data
  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8888/MovieData/${id}`, formData)
      .then(() => {
        // Update the 'item' state with the new data and exit editing mode
        setItem(formData);
        setIsEditing(false);
      });
  };

  // Display loading text while the data is being fetched
  if (!item) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top section with background image and title */}
      <div className="relative w-full h-64 bg-gray-300 top-0">
        <img
          src={item.url} // Movie/series poster image
          alt={item.title} // Alt text for the image
          className="object-cover w-full h-full opacity-80"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          {item.title} {/* Movie/series title displayed on top of the image */}
        </h1>
      </div>

      {/* Main content section */}
      <main className="flex-grow flex flex-col items-center bg-white p-8 shadow-md">
        <div className="max-w-6xl w-full mt-8 flex flex-col md:flex-row items-center">
          {/* Movie/series image and details */}
          <img className="w-64 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-8" key={item.id} src={item.url} alt={item.title} />
          <div className="text-left">
            <h1 className='text-xl font-bold'>{item.title}</h1>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-gray-600"><strong>Country:</strong> {item.country}</p>
            <p className="text-gray-600"><strong>Genre:</strong> {item.genre}</p>
            <p className="text-gray-600"><strong>Year:</strong> {item.year}</p>
            <p className="text-gray-600"><strong>Type:</strong> {item.type}</p>
            <div className="mt-6">
              {/* Edit and Delete buttons */}
              <button
                onClick={handleEditToggle}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600"
              >
                {isEditing ? 'Cancel' : 'Edit'} {/* Toggle button label */}
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

        {/* Form for editing movie/series details, only visible in editing mode */}
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
              Save {/* Save changes */}
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default DisplayMovie;
