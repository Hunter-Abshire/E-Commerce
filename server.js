const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

const auth = basicAuth({
    users: {
        'JimmyBob': '123',
        'Sarah Smith': '456',
    },
});

app.use(express.static(path.join(__dirname, "client/dist")));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.get('/api/authenticate', auth, (req, res) => {
    console.log('Request headers:', req.headers);
    console.log(`Authenticated user: ${req.auth.user}`);
    if (req.auth.user === 'JimmyBob') {
        res.send('admin');
    } else if (req.auth.user === 'Sarah Smith') {
        res.send('user');
    } else {
        res.send('dfd');
    }
  });