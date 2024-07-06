// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProfileManager from './components/ProfileManager';
import ProfileForm from './components/ProfileForm';
import './App.css';

const App = () => {
  const [profile, setProfile] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    experiences: [],
    skills: [],
    resume: null
  });

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProfileManager profile={profile} />} />
            <Route path="/settings" element={<ProfileForm profile={profile} onProfileUpdate={handleProfileUpdate} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
