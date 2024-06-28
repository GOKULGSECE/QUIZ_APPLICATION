
# Quiz Application

![Project Image](./path/to/your/project/image.png) <!-- Replace with a relevant project image or logo -->

## Overview

This Quiz Application project is developed as part of Task 2 assignment under the Innovixion Tech online internship. It allows users to participate in quizzes on various topics, manage quiz content, and authenticate securely using JSON Web Tokens (JWT).

### Key Features

- **User Authentication:** Secure user registration and login using JWT tokens.
- **Quiz Management:** Create, read, update, and delete quizzes.
- **Interactive Quiz Interface:** Intuitive UI for taking quizzes with question navigation.

### Technologies Used

- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** React, Axios, React Router
- **Authentication:** JSON Web Tokens (JWT)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/quiz-application.git
   cd quiz-application
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory with the following environment variables:

   ```plaintext
   DB_CONNECT=your_mongodb_connection_string
   TOKEN_SECRET=your_jwt_secret
   PORT=5000
   ```

   Start the backend server:

   ```bash
   npm start
   ```

3. **Frontend Setup:**

   ```bash
   cd ../frontend
   npm install
   npm start
   ```

   The frontend application will be served at `http://localhost:3000`.

## Usage

1. **Signup:** Create a new account by signing up.
2. **Login:** Log in with your credentials.
3. **Quiz Participation:** After logging in, participate in quizzes available on various topics.
4. **Manage Quizzes:** Admin users can manage quiz content by adding, editing, or deleting quizzes.

## API Endpoints

- **User Routes:**
  - `POST /api/users/signup`: Create a new user.
  - `POST /api/users/login`: Authenticate a user and return a JWT token.

- **Quiz Routes:**
  - `GET /api/quizzes`: Get all quizzes.
  - `POST /api/quizzes`: Create a new quiz.
  - `PUT /api/quizzes/:id`: Update an existing quiz.
  - `DELETE /api/quizzes/:id`: Delete a quiz.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgements

Thanks to Innovixion Tech for providing the opportunity to work on this project and gain valuable experience in web development.
