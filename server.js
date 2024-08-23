const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  const User = mongoose.model('User', userSchema);
const password = encodeURIComponent('HA101702');
  
const url = `mongodb+srv://hunterabshire17:${password}@cluster0.vl5oa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDB Atlas');
      // do something with your database here
    }
  });


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log(err));


const auth = basicAuth({
    users: {
        'admin': '123',
        'user': '456',
    },
});

app.use(express.json());

app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));

app.use(express.static(path.join(__dirname, "client/dist")));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.get('/api/authenticate', auth, (req, res) => {
    const options = {
        httpOnly: true,
        signed: true,
    };

    if (req.auth.user === 'admin') {
        res.cookie('name', 'admin', options).send({ screen: 'admin' });
    } else if (req.auth.user === 'user') {
        res.cookie('name', 'user', options).send({ screen: 'user' });
    }
});

app.get('/api/read-cookie', (req, res) => {
    if (req.signedCookies.name === 'admin') {
      res.send({ screen: 'admin' });
    } else if (req.signedCookies.name === 'user') {
      res.send({ screen: 'user' });
    } else {
      res.send({ screen: 'auth' });
    }
  });
  
  app.get('/api/clear-cookie', (req, res) => {
    res.clearCookie('name').end();
  });

  app.get('/api/get-data', (req, res) => {
    if (req.signedCookies.name === 'admin') {
      res.send('This is admin panel');
    } else if (req.signedCookies.name === 'user') {
      res.send('This is user data');
    } else {
      res.end();
    }
  });

  app.post('/api/users', async (req, res) => {
    const { username, password} = req.body;
    try {
      const user = new User({ username, password});
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, password} = req.body;
    try {
      const user = await User.findByIdAndUpdate(id, { username, password}, { new: true });
      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await User.findByIdAndDelete(id);
      res.status(204).send();
    } catch (err) {
      res.status(500).send(err);
    }
  });