# bc32_BrokenApp
Practice fixing a broken Express app to make it run smoothly!

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Future Improvements](#future-improvements)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Setup Instructions](#setup-instructions)
  - [Continued development](#continued-development)
- [Routes](#routes)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License] (#license)

---
## Overview
This project has three parts... answerings questions, creating a command line script (urls.js file), and fixing a broken Express app.

For the third part of the project, the goal is to identify and resolve issues in the code to make it functional. The app is designed to handle requests for developer information from the GitHub API and return their names and bios. The full api is available at https://api.github.com/, but this app only uses the /users endpoint.

### Features
- Handles GET and POST requests to retrieve developer information from GitHub.
- Returns names and bios of developers based on usernames provided in the request body.

### Future Improvements
- Implement more robust error handling.
- Add more endpoints for additional functionality.
- Create the user interface for better interaction.

## Built With
- Node.js
- Express.js
- Axios for making HTTP requests
- Insomnia for testing API requests
- Git for version control

## Getting Started
### Setup Instructions
1. Clone the repository:
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm --watch server.js
   ```
5. Use Insomnia or any API client to test the endpoints.

### Continued development
- Explore the codebase to understand the structure and functionality.
- Add more features or improve existing ones.

## Routes
- **GET /**: Returns a welcome message. 
- **POST /users**: Accepts a JSON body with an array of developer usernames and

---

## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, vairous Udemy courses, Geeks for Geeks, and Stony Brook University's Software Engineering Bootcamp (Colt Steele) 

## License
This project is licensed under the ISC license