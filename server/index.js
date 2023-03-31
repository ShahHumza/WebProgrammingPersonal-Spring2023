const express = require('express');
const path = require('path');
const products = require('./controllers/workouts');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

let workouts = {};

// Middleware
app
  .use(express.json())
  .use(express.static(path.join(__dirname, '../client/dist')));

// Actions
app
  .get('/workouts', (req, res) => {
    res.json(workouts);
  })
  .post('/workouts', (req, res) => {
    const { name, date, duration } = req.body;
    if (!workouts[name]) {
      workouts[name] = [];
    }
    workouts[name].push({ date, duration });
    res.send('Workout added successfully!');
  });

// Catch all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);