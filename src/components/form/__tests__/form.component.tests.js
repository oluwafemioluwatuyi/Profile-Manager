// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import ProfileForm from '../profile/ProfileForm';


// // Mock profile data 
// const profileMock = {
//   personalInfo: {
//     name: 'John Doe',
//     email: 'john@example.com',
//     phone: '1234567890',
//   },
//   experiences: ['Software Engineer at XYZ'],
//   skills: ['JavaScript', 'React'],
//   resume: null,
// };

// // Mock function to simulate profile update callback
// const onProfileUpdateMock = jest.fn();

// const renderComponent = (profile = profileMock) => {
//   return render(
//     <MemoryRouter>
//       <ProfileForm profile={profile} onProfileUpdate={onProfileUpdateMock} />
//     </MemoryRouter>
//   );
// };

// describe('ProfileForm', () => {
//   test('renders form with initial profile data', () => {
//     renderComponent();

//     //Verify that the form fields are populated with the initial profile data
//     expect(screen.getByLabelText(/name/i).value).toBe(profileMock.personalInfo.name);
//     expect(screen.getByLabelText(/email/i).value).toBe(profileMock.personalInfo.email);
//     expect(screen.getByLabelText(/phone/i).value).toBe(profileMock.personalInfo.phone);
//     expect(screen.getByText(/software engineer at xyz/i)).toBeInTheDocument();
//     expect(screen.getByText(/javascript/i)).toBeInTheDocument();
//     expect(screen.getByText(/react/i)).toBeInTheDocument();
//   });

//   // test for handle user field input changes
//   test('handles input changes', () => {
//     renderComponent();

//     fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Doe' } });
//     expect(screen.getByLabelText(/name/i).value).toBe('Jane Doe');

//     fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
//     expect(screen.getByLabelText(/email/i).value).toBe('jane@example.com');

//     fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '0987654321' } });
//     expect(screen.getByLabelText(/phone/i).value).toBe('0987654321');
//   });


//   test('adds a new experience', () => {
//     renderComponent();
//     // Simulate adding a new experience
//     fireEvent.change(screen.getByPlaceholderText(/add experience/i), { target: { value: 'Frontend Developer at ABC' } });
//     fireEvent.click(screen.getByText(/add experience/i));

//    //// Verify the new experience is added to the list
//     expect(screen.getByText(/frontend developer at abc/i)).toBeInTheDocument();
//   });

//   test('adds a new skill', () => {
//     renderComponent();

//     fireEvent.change(screen.getByPlaceholderText(/add skill/i), { target: { value: 'TypeScript' } });
//     fireEvent.click(screen.getByText(/add skill/i));

//     expect(screen.getByText(/typescript/i)).toBeInTheDocument();
//   });

//   test('handles resume upload', () => {
//     renderComponent();

//     const file = new File(['resume content'], 'resume.pdf', { type: 'application/pdf' });
//     const input = screen.getByText(/drag and drop a pdf file format, or click to select one/i).closest('input');

//     fireEvent.change(input, { target: { files: [file] } });

//     expect(screen.getByText(/selected file: resume.pdf/i)).toBeInTheDocument();
//   });

//    // test for rendering the component details
//   test('submits the form', () => {
//     renderComponent();

//     fireEvent.click(screen.getByText(/save/i));

//     expect(onProfileUpdateMock).toHaveBeenCalledWith({
//       personalInfo: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         phone: '1234567890',
//       },
//       experiences: ['Software Engineer at XYZ'],
//       skills: ['JavaScript', 'React'],
//       resume: null,
//     });
//   });

//   // test for csncel button
//   test('cancels the form', () => {
//     const { history } = renderComponent();
   
//     fireEvent.click(screen.getByText(/cancel/i));

//     expect(history.location.pathname).toBe('/');
//   });
// });

