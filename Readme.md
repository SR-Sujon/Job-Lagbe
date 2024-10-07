# Job Lagbe

Job Lagbe is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to simplify the job-hunting process. Whether you're a candidate looking for your dream job or a recruiter searching for the best candidates, Job Lagbe provides a dynamic and user-friendly platform to help you achieve your goals.

## Features

- **Landing Page**: A sleek and modern landing page showcasing the app's core functionality.
- **Error Page**: Custom error handling for improved user experience.
- **User Authentication**: Secure registration and login system for both candidates and recruiters.
- **Dashboard**: Personalized user dashboards for tracking jobs, applications, and profiles.
- **Page Navigation**: Seamless transitions between pages using React Router 6.

## Tech Stack

### Front-End
- **React.js**: Built using Vite for optimal performance.
- **HTML5**: For markup and structure.
- **CSS3**: For styling and responsive design.

### Back-End
- **Node.js**: For building the server-side application.
- **Express.js**: For API routing and handling HTTP requests.
- **MongoDB**: As the database to store user information, jobs, and applications.

## Installation and Setup

Follow these steps to get the project running on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/job-lagbe.git
````
### 2. Install dependencies
Navigate to the project folder and install the required dependencies for both the client and server:
```bash
cd job-lagbe
npm install
````
### 3. Set up environment variables
Create a .env file in the root of the project and add your environment variables:

MongoDB URI
JWT secret (for authentication)
Other relevant variables

### 4. Run the application
Client:
```bash
cd client
npm run dev
```
Server:
```bash
cd server
npm start
```
The client will run on http://localhost:5173 and the server will run on http://localhost:5000.

## Project Status
The project is still ongoing, with future development focused on enhancing user experience, adding new features like job recommendations, messaging systems, and advanced job search functionality.

## Contributions
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request. We appreciate your help in making Job Lagbe even better!

## License
This project is licensed under the MIT License. For more details, see the LICENSE file.
