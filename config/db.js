// Initialize the connection to the database
const mongoose = require('mongoose');

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Weather-Forecast-App', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
// Export the function
module.exports = connectDB;
