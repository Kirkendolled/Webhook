const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

// Configure Express to parse JSON data
app.use(express.json());

// Handle the JotForm webhook request
app.post('/webhook', (req, res) => {
  const formData = req.body; // Access the form data sent by JotForm

  // Process the form data and perform desired actions
  // You can generate the document or store the data as needed

  // Return a response to JotForm (status 200 OK)
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});