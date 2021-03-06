const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Use Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Now is server time.');
});

app.listen(port, () => {
    console.log('Listening to the port', port);
});