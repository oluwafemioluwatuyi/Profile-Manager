import React from 'react';

const ProfileDisplay = ({ profile }) => {
  const { personalInfo = {}, resume } = profile;

  return (
    <div className="profile-display">
      <h2>Profile Information</h2>
      <p>Name: {personalInfo.name}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>
      {resume && (
        <div>
          <h3>Resume:</h3>
          <a href={URL.createObjectURL(resume)} target="_blank" rel="noopener noreferrer">
            {resume.name}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfileDisplay;
