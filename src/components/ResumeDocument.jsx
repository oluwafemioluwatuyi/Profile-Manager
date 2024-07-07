import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const ResumeDocument = ({ profile }) => {
  const { personalInfo, experiences, skills } = profile;

  return (
    <Document>
      <Page>
        <Text>Name: {personalInfo.name}</Text>
        <Text>Email: {personalInfo.email}</Text>
        <Text>Phone: {personalInfo.phone}</Text>
        <Text>Experiences:</Text>
        {experiences.map((exp, index) => (
          <Text key={index}>{exp}</Text>
        ))}
        <Text>Skills:</Text>
        {skills.map((skill, index) => (
          <Text key={index}>{skill}</Text>
        ))}
      </Page>
    </Document>
  );
};

export default ResumeDocument;
