const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// CRUD Routes

// Create
app.post('/group', (req, res) => {
    // Logic to create an group
    res.send('group created');
});

// Read
app.get('/group/:id', (req, res) => {
    // Logic to read an group by id
    res.send('group details');
});

// Update
app.put('/group/:id', (req, res) => {
    // Logic to update an group by id
    res.send('group updated');
});

// Delete
app.delete('/group/:id', (req, res) => {
    // Logic to delete an group by id
    res.send('group deleted');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
