// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Searchpage/Header';
import Searchpage from './components/Searchpage/Searchpage';
import ProfilePage from './components/Searchpage/ProfilePage';
import SignOutPage from './components/Searchpage/SignOutPage';
import Review from './components/Searchpage/Review';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Searchpage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/review" element={<Review />} />
          <Route path="/Signout" element={<SignOutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
