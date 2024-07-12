# Weather Forecast Application

## Introduction

The Weather Forecast Application is a web-based app that allows users to check the current weather and get forecasts for the upcoming days. The app uses the OpenWeatherMap API to fetch weather data and dynamically displays the information on the site. Additionally, the application now includes user authentication features using MongoDB, Express, and JWT for a more personalized experience.

## Importance of the Application

- **User Assistance**:  Provides accurate weather information, helping users plan their daily activities.
- **Educational**: Can be used as an educational project to learn how to use APIs, handle dynamic data, and implement user authentication.
- **Technological Advancement**: Enhances programming and design skills using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

## How It Works

### Overall Structure

1. **HTML**: Provides the basic structure of the page.
2. **CSS**: Adds styles and design to improve the visual appearance.
3. **JavaScript**: Interacts with the API to fetch data and update the page dynamically.
4. **Node.js and Express**: Handles server-side logic and routes.
5. **MongoDB**: Stores user data securely.
5. **JWT**: Manages user authentication tokens.

### Steps

1. **Prepare Basic Files**: `index.html`, `interface.css`, `Weather_code.js`,
`app.js`, `authController.js`, `auth.js`, `User.js`, `auth.js`.
2. **Set Up HTML**: Build the basic structure of the page using HTML.
3. **Add CSS**: Style the page using CSS to make it attractive and responsive.
4. **Write JavaScript**: Fetch weather data from the OpenWeatherMap API and update the content dynamically.
5. **Set Up Node.js and Express**: Handle server-side logic and create routes.
6. **Implement MongoDB**: Store user data securely.
7. **Implement JWT**: Manage user authentication tokens.

### Files

- `index.html`: Contains the basic structure of the page.
- `interface.css`: Contains the styles and design.
- `Weather_code.js`: Contains the code that fetches weather data and updates the page.
- `app.js`: Main server file that connects to the database and sets up routes.
- `authController.js`: Contains the logic for user registration and login.
- `auth.js`: Defines the routes for user authentication.
- `User.js`: MongoDB model for storing user information.
- `auth.js`: Middleware for checking user authentication.

## Important Links

- **Presentation**: [Google Presentation](https://docs.google.com/presentation/d/1lA9wUEOF6VXF_-fIZ2QagrjGlwlUKUhepWoy8-jzuoE/edit#slide=id.g742e3e7cd_1_16)
- **Video**: [YouTube Video](https://www.youtube.com/watch?v=h1BvgI65Y8E)
- **Application**: [Netlify Application](https://webweatherforecastapplic.netlify.app/)


# Future Enhancements

### 10 Ideas to Enhance the Site

1. **Hourly Weather Forecasts**: Display hourly forecasts throughout the day.
2. **Interactive Map**: Add an interactive map showing current weather locations.
3. **Weather Notifications**: Add a feature to send users notifications about weather changes.
4. **Night Mode**: Provide a night mode to reduce eye strain.
5. **Emergency Alerts**: Display emergency weather alerts such as storms or heavy rain.
6. **Wind Information**: Add detailed information about wind speed and direction.
7. **Social Media Integration**: Allow users to share weather information on social media.
8. **Data Analysis**: Display graphs and analyses of weather changes over days.
9. **Temperature Unit Toggle**: Allow users to switch between Celsius and Fahrenheit.
10. **Voice Assistant Integration**: Provide integration with voice assistants like Google Assistant and Alexa.


# How to Run the Project Locally

### Requirements

- Node.js and npm installed.
- MongoDB installed and running locally or a MongoDB Atlas account.
- A modern browser (Chrome, Firefox, etc.).
- Internet connection to access the OpenWeatherMap API.

### Steps

1. **Clone the Repository**: Clone the repository from [GitHub](https://github.com/MARIEM0123/Webstack-Portfolio-Project).
2. **Install Dependencies**: Run npm install to install all necessary dependencies.
3. **Set Up Environment Variables**: Create a .env file with the following variables:
```MONGO_URI=mongodb://localhost:27017/Weather-Forecast-App
JWT_SECRET=yourSecretKey
OPENWEATHERMAP_API_KEY=yourOpenWeatherMapAPIKey
```

4. **Start MongoDB**: Ensure MongoDB is running locally.
5. **Run the Server**: Start the server with ``npm start``.
6. **Open the Application**: Open http://localhost:5000 in your browser.
7. **Register and Login**: Use the authentication features to register and log in.

This project combines frontend and backend technologies to create a full-stack application. It serves as a great learning experience for handling APIs, dynamic data, and user authentication.
