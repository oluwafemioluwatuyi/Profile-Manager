import React from 'react';
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
import './ProfileDisplay.css';

const ProfileDisplay = ({ profile }) => {
  const { personalInfo = {}, experiences, skills, resume } = profile;

  return (
    <div className="profile-display">
      <section>
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
      <section>
      {resume && (
        <div className="resume-preview">
          <h2>Resume Preview</h2>
          <PDFViewer width="100%" height={600}>
            <Document>
              <Page size="A4">
                <Text>{`Resume for ${personalInfo.name}`}</Text>
    
              </Page>
            </Document>
          </PDFViewer>
        </div>
      )}
      </section>

     
    </div>
  );
};

export default ProfileDisplay;

