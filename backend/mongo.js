const mongoose = require('mongoose');

// Database connection URL
const url = "mongodb+srv://jp:jp123@cluster.kjnzod3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
    // Start your quiz app or perform any database operations here
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });


