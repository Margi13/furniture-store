const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { PORT, DB_CONNECTION_STRING } = require('./constants')
const routes = require('./routes');
const { auth } = require('./middlewares/authMiddleware');

const app = express();

mongoose.connect(DB_CONNECTION_STRING)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((error) => {
        console.log('DB Error:', error);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth);
app.use(cors());

app.get('/', (req, res) => {
    res.json({ text: 'It\'s working' });
});

app.use(routes);
app.use((err, req, res, next) => {
    if (err) {
        res.status(err.statusCode || 400).json({ message: err.message });
    }
});
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));