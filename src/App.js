import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MovieGrid from './Components/MovieGrid';
import MovieDetail from './Components/MovieDetail';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import { UserProvider } from './contexts/UserContext';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
