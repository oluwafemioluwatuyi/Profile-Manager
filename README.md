# Profile Manager
## Project Description

The Profile Manager is a web application built using React that allows users to manage their personal information, professional experiences, skills, and upload their resume in a PDF format. The application features an easy-to-use form for updating profile details and a PDF viewer for displaying the uploaded resume.

## Table of Contents

1. [Installation](#installation)
2. [Running the Project](#running-the-project)
3. [Usage](#usage)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/oluwafemioluwatuyi/profile-manager.git
   cd profile-manager

2. **Install dependencies**:
   Make sure you have Node.js and npm installed on your machine. Then, run the following command:
   ``` bash
   npm install
3. **Running the Project**:
   To start the development server, use the following command:
    ```bash
    npm start
    

##  Usage

1. **Profile Form**:
    Navigate to the "Settings" page using the sidebar.
    Fill in your personal information, professional experiences, skills, and upload your resume in PDF format.
    Click the "Save" button to store your profile details. The profile information will be saved in local storage.

2. **Profile Display**:
    Navigate back to the home page.
    The profile information and the uploaded resume will be displayed. The personal information, professional experiences, and skills will be displayed in one section, 
    while the resume will be displayed using the PDF viewer.
    File Structure
    src/components/ProfileForm.js: Component for the profile form where users can input their details and upload a resume.
    src/components/ProfileDisplay.js: Component to display the user's profile information and resume.
    src/components/ProfileManager.js: Component to manage the state and data flow between the form and display components.
    src/components/Sidebar.js: Sidebar navigation component.
    src/App.js: Main application component where routes and layout are defined.
    src/App.css: Global styles for the application.
    src/components/ProfileDisplay.css: Styles specific to the ProfileDisplay component.
    Technologies Used
    React
    React Router
    React Dropzone
    React PDF Renderer
    CSS

## Testing
    