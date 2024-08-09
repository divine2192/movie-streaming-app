import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #BB2CD9;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background: #0C0220;
  }
`;

const FavoriteMovies = styled.div`
  margin-top: 20px;
`;

const FavoriteMovie = styled.div`
  margin-bottom: 10px;
`;

const UserProfile = () => {
  const { user, logout, updateProfileImage, favorites } = useContext(UserContext);
  const [newProfileImage, setNewProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProfileImage(reader.result);
      updateProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  if (!user) {
    return <ProfileContainer><p>Please log in to view your profile.</p></ProfileContainer>;
  }

  return (
    <ProfileContainer>
      <h2>My Account</h2>
      <ProfilePicture src={user.profileImage || 'https://via.placeholder.com/100'} alt="Profile" />
      <Input type="file" accept="image/*" onChange={handleImageUpload} />
      <Button onClick={handleLogout}>Logout</Button>
      <FavoriteMovies>
        <h3>Favorite Movies</h3>
        {favorites && favorites.length > 0 ? (
          favorites.map((movie, index) => (
            <FavoriteMovie key={index}>{movie.title}</FavoriteMovie>
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </FavoriteMovies>
    </ProfileContainer>
  );
};

export default UserProfile;
