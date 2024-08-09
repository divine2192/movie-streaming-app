import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Check for a logged-in user on initial load
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/auth/user'); // Replace with your API endpoint
        setUser(response.data);
      } catch (error) {
        console.error('No user logged in');
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials); // Replace with your API endpoint
      setUser(response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post('/api/auth/signup', userData); // Replace with your API endpoint
      setUser(response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout'); // Replace with your API endpoint
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const updateProfileImage = async (imageUrl) => {
    try {
      const response = await axios.put('/api/user/profile-image', { imageUrl }); // Replace with your API endpoint
      setUser((prevUser) => ({
        ...prevUser,
        profileImage: response.data.profileImage,
      }));
    } catch (error) {
      console.error('Profile image update failed:', error);
    }
  };

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <UserContext.Provider
      value={{ user, login, signup, logout, updateProfileImage, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};
