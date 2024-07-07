import React, { useState, useEffect } from 'react';
import ProfileDisplay from './ProfileDisplay';

const ProfileManager = () => {
  const [profile, setProfile] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    experiences: [],
    skills: [],
    resume: null,
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem('profile', JSON.stringify(updatedProfile));
  };

  return (
    <div className="profile-manager">
      <ProfileDisplay profile={profile} />
    </div>
  );
};

export default ProfileManager;
