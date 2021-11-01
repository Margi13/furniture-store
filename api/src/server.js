const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ text: 'It\'s working' });
});

app.use(routes);
app.listen(3030, () => console.log('App is running on port 3030'));