# GoforMeet User Profile Feature

## Overview

This project is part of a technical task for GoforMeet. It involves creating a user profile management feature with location-based sorting. The feature allows users to create, store, and view profiles with sorting capabilities based on their location. The project uses a stack comprising MongoDB, Express.js, and React, with Tailwind CSS for responsive design.

## Features

- **User Profile Creation**: Users can create profiles with details such as name, age, location, and profession.
- **Profile Storage**: Profiles are stored in a MongoDB database.
- **Profile Display**: Profiles are displayed on a web page in a wall format.
- **Location-Based Sorting**: Profiles are sorted and displayed based on their location.
- **Pagination**: Handles a large number of profiles with pagination.
- **Form Validation**: Ensures that user inputs are valid (e.g., age is a number).

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Express.js
- **Database**: MongoDB
- **Tools**: Git, GitHub, VS Code

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RathlavathRamesh/GoformeetAssignment.git
   cd goformeet-profile-feature

2.Install Dependencies:
Navigate to both the frontend and backend directories to install dependencies:
# For the frontend
cd frontend
npm install

# For the backend
cd ../backend
npm install

3.Configure Environment Variables:

Create a .env file in the backend directory with the following contents:
MONGODB_URI=your_mongodb_connection_string
PORT=1024(i have used it and if you also use the same you need not to change api call's 
Details:

  MONGODB_URI: This is the connection string used to connect to your MongoDB database. Replace your_mongodb_connection_string with the actual connection string for your MongoDB instance.

4.Run the Application:

  Start the backend server:
      cd backend
      npm start
  Start the frontend development server:

Database Schema

The MongoDB schema for the user profiles includes the following fields:

  name: String - The name of the user.
  age: Number - The age of the user.
  location: String - The location of the user.
  profession: String - The profession of the user.

6.Access the Application:

Open your browser and navigate to http://localhost:3000 to view the application.


API Endpoints
Profiles

   POST /api/profiles
        Description: Create a new user profile.
        Request Body: { "name": "string", "age": number, "location": "string", "profession": "string" }
        Response: Created profile.

   GET /api/profiles
        Description: Retrieve profiles sorted by location.
        Response: List of profiles sorted by the  location.

Features
Home Page

  Welcome Section: Provides a visually engaging welcome message with a background image, introducing users to the application.
    Navigation Links: Includes links to "Create Your Profile" and "View Profiles" with styled buttons that navigate to respective pages.
    Information Sections: Highlights key benefits of joining the platform, such as connecting with others, discovering opportunities, and staying updated.
    Footer: Displays a fixed footer with copyright information.

User Profile Form

  Form Creation: Allows users to create a profile by entering details like name, age, location, and profession.
    Form Validation: Ensures that all fields are filled out and that age is a number before submission.
    Profile Submission: Submits the profile data to the backend using a POST request and provides feedback on success or failure.

User Profile Wall

  Profile Display: Fetches and displays user profiles with details such as name, age, location, and profession.
    Location-Based Sorting: Profiles are fetched from the backend and sorted based on their location (note: ensure sorting is implemented on the backend if not already).
    Pagination: Handles large sets of profiles by providing pagination controls to navigate through pages of profiles.
    Profile Cards: Presents profiles in visually distinct cards with alternating background colors.

Navigation

  Header Component: Provides navigation links to "Create Profile" and "View Profiles" pages and includes a logo for branding.
    Routing: Utilizes React Router to manage navigation between different pages of the application.



