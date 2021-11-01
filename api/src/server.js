const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    // Can access requests from this origin
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Can make this kind of requests
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');

    //Client cannot add other headers than above
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-authorization');

    next();
})

app.get('/', (req, res) => {
    res.json({ text: 'It\'s working' });
});

app.use(routes);
app.listen(3030, () => console.log('App is running on port 3030'));