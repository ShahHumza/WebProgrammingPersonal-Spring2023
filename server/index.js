const express = require('express')
const path = require('path');
// const jokes = require('./controllers/jokes');
// const products = require('./controllers/products')
const products = require('./controllers/workout')
const app = express()

let workouts = {};

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))


// Actions
app
    .get('/workouts', (req, res) => {
        res.json(workouts);
    })
    .use('/api/v1/products', products)
    .use('/api/v1/jokes', jokes)

// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app
    .post('/workouts', (req, res) => {
        const { name, date, duration } = req.body;
        if (!workouts[name]) {
        workouts[name] = [];
        }
        workouts[name].push({ date, duration });
        res.send('Workout added successfully!');
    });


console.log('1: About to start server')

app.listen(port, () => 
  console.log(`2: Server running at http://${hostname}:${port}/`)
);

console.log('3: Asked server to start')