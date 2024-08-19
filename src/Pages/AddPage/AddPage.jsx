import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPage = () => {
  // State variables to manage form inputs
  const [title, setTitle] = useState(''); // Movie/Series title
  const [description, setDescription] = useState(''); // Description of the movie/series
  const [country, setCountry] = useState(''); // Country of origin
  const [type, setType] = useState('movie'); // Type of content, default is "movie"
  const [year, setYear] = useState(''); // Year of release
  const [url, setUrl] = useState(''); // URL for the image
  const [imagePreview, setImagePreview] = useState(null); // Preview of the selected image file

  const navigate = useNavigate(); // For navigating between routes

  // Function to handle file input changes (when the user uploads an image)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl(reader.result); // Set the image URL to the file content
        setImagePreview(reader.result); // Set the image preview to show the selected image
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Fetch existing data to determine the last ID
      const response = await axios.get('http://localhost:8888/MovieData');
      const existingData = response.data;
  
      // Determine the last ID to increment for the new entry
      const lastId = existingData.length > 0
        ? Math.max(...existingData.map(item => item.id)) // Get the highest ID from the existing data
        : 0;
  
      // Construct the new entry object
      const newEntry = {
        id: (lastId + 1).toString(),
        title,
        description,
        country,
        type,
        year,
        url, // Image URL
      };
  
      // Submit the new entry to the JSON server
      await axios.post('http://localhost:8888/MovieData', newEntry);
      alert('Entry added successfully!'); // Success message
      navigate('/'); // Redirect to the home page after submission
    } catch (error) {
      console.error('There was an error submitting the data!', error); // Log any errors
      alert('Failed to submit the data. Please try again.'); // Error message for the user
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top banner section */}
      <div className="w-full h-[50vh] bg-cover bg-center relative" style={{ backgroundImage: `url('SquidGames.png')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h2 className="text-white text-5xl font-normal">ADD A MOVIE/SERIES</h2>
        </div>
      </div>

      {/* Form container */}
      <div className="flex justify-center items-center flex-1 px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Image Upload Section */}
          <div className="flex flex-col items-center">
            <div className="w-full h-96 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-600 transition">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="text-center">
                  <p className="text-gray-400">Upload Movie Poster</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-4"
            />
          </div>

          {/* Input Fields Section */}
          <div className="flex flex-col space-y-4">
            {/* Movie/Series Name */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Movie/Series Name
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                required
              />
            </div>

            {/* Year */}
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

            {/* Type (Movie or Series) */}
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Type
              </label>
              <div className="flex items-center mt-2">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="movie"
                    checked={type === 'Movie'}
                    onChange={() => setType('Movie')}
                    className="mr-2"
                  />
                  Movie
                </label>
                <label>
                  <input
                    type="radio"
                    value="series"
                    checked={type === 'Series'}
                    onChange={() => setType('Series')}
                    className="mr-2"
                  />
                  Series
                </label>
              </div>
            </div>

            {/* Save Button */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPage;
