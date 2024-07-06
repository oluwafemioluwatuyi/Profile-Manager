import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileForm.css';

const ProfileForm = ({ profile, onProfileUpdate }) => {
  const navigate = useNavigate();
  const initialProfile = JSON.parse(localStorage.getItem('profile')) || profile;
  
  const [formState, setFormState] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    experiences: [],
    skills: [],
    resume: null,
    ...initialProfile
  });

  useEffect(() => {
    setFormState({
      personalInfo: {
        name: profile.personalInfo?.name || '',
        email: profile.personalInfo?.email || '',
        phone: profile.personalInfo?.phone || '',
      },
      experiences: profile.experiences || [],
      skills: profile.skills || [],
      resume: profile.resume || null,
    });
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value
      }
    }));
  };

  const handleFileChange = (e) => {
    setFormState({
      ...formState,
      resume: e.target.files[0]
    });
  };

  const handleAddExperience = () => {
    const experience = document.getElementById("experience").value;
    if (experience) {
      setFormState(prevState => ({
        ...prevState,
        experiences: [...prevState.experiences, experience]
      }));
      document.getElementById("experience").value = "";
    }
  };

  const handleEditExperience = (index, updatedExperience) => {
    setFormState(prevState => {
      const updatedExperiences = [...prevState.experiences];
      updatedExperiences[index] = updatedExperience;
      return { ...prevState, experiences: updatedExperiences };
    });
  };

  const handleDeleteExperience = (index) => {
    setFormState(prevState => {
      const updatedExperiences = prevState.experiences.filter((_, i) => i !== index);
      return { ...prevState, experiences: updatedExperiences };
    });
  };

  const handleAddSkill = () => {
    const skill = document.getElementById("skill").value;
    if (skill) {
      setFormState(prevState => ({
        ...prevState,
        skills: [...prevState.skills, skill]
      }));
      document.getElementById("skill").value = "";
    }
  };

  const handleEditSkill = (index, updatedSkill) => {
    setFormState(prevState => {
      const updatedSkills = [...prevState.skills];
      updatedSkills[index] = updatedSkill;
      return { ...prevState, skills: updatedSkills };
    });
  };

  const handleDeleteSkill = (index) => {
    setFormState(prevState => {
      const updatedSkills = prevState.skills.filter((_, i) => i !== index);
      return { ...prevState, skills: updatedSkills };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(formState);
    localStorage.setItem('profile', JSON.stringify(formState));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <div className="form-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formState.personalInfo.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formState.personalInfo.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={formState.personalInfo.phone} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-section">
        <h2>Professional Experiences</h2>
        {formState.experiences.map((exp, index) => (
          <div key={index} className="experience-item">{exp}</div>
        ))}
        <div className="form-group">
          <input type="text" id="experience" placeholder="Add experience" />
          <button type="button" onClick={handleAddExperience}>Add Experience</button>
        </div>
      </div>

      <div className="form-section">
        <h2>Skills</h2>
        {formState.skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
        <div className="form-group">
          <input type="text" id="skill" placeholder="Add skill" />
          <button type="button" onClick={handleAddSkill}>Add Skill</button>
        </div>
      </div>

      <div className="form-section">
        <h2>Resume Upload</h2>
        <div className="form-group">
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>

      <div className="button-group">
        <button type="button" className="cancel" onClick={() => navigate('/')}>Cancel</button>
        <button type="submit" className="save-button">Save</button>
      </div>
    </form>
  );
};

export default ProfileForm;
