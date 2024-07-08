import React, { useState, useEffect } from 'react';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import './ProfileDisplay.css';

const ProfileDisplay = ({ profile }) => {
  const { personalInfo = {}, experiences = [], skills = [], resume = null } = profile;
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {
    if (resume) {
      setResumeFile(resume);
    }
  }, [resume]);

  return (
    <div className="profile-display">
      <section className='section-info'>
        <h2>Profile Information</h2>
        <p>Name: {personalInfo.name}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>

        <h2>Professional Experiences</h2>
        <ul>
          {experiences.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>

        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className='section-resume'>
        {resumeFile ? (
          <div className="resume-preview">
            <h2>Resume Preview</h2>
            <PDFViewer width="100%" height={600}>
              <Document file={resumeFile}>
                <Page pageNumber={1} />
              </Document>
            </PDFViewer>
          </div>
        ) : (
          <p>No resume available</p>
        )}
      </section>
    </div>
  );
};

export default ProfileDisplay;
