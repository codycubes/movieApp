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
    year: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8888/MovieData/${id}`)
      .then((response) => {
        setItem(response.data);
        setFormData({
          title: response.data.title,
          description: response.data.description,
          year: response.data.year
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

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.year}</p>
      <button onClick={handleEditToggle}>{isEditing ? 'Cancel' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>

      {isEditing && (
        <form onSubmit={handleEditSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default DisplayMovie;
