const express = require('express');
const model = require('../models/workouts');
const router = express.Router();

router
.get('/:username', (req, res) => {
  try {
    const username = req.params.username
    const list = model.getWorkouts(username)
    const data = { data: list, total: list.length, isSuccess: true };
    res.send(data);
  } catch (err) {
    console.error(err);
    const data = { error: err.message, isSuccess: false };
    res.status(500).send(data);
  }
})
.get('/search/:q', (req, res) => {
  try {
    const term = req.params.q;
    const list = model.searchWorkouts(term) || [];
    const data = { data: list, total: list.length, isSuccess: true };
    res.send(data);
  } catch (err) {
    console.error(err);
    const data = { error: err.message, isSuccess: false };
    res.status(500).send(data);
  }
})
.get('/:id', (req, res) => {
  try {
    const id = +req.params.id;
    const workout = model.getWorkoutById(id);
    const data = { data: workout, isSuccess: true };
    res.send(data);
  } catch (err) {
    console.error(err);
    const data = { error: err.message, isSuccess: false };
    res.status(500).send(data);
  }
})
  .post('/', (req, res) => {
    const workout = req.body;
    model.addWorkouts(workout);
    // await addToWorkouts(workout);
    const data = { data: workout, isSuccess: true };
    res.send(data)
  })
  .patch('/:id', (req, res) => {
    const workout = req.body;
    model.updateWorkout(workout);
    const data = { data: workout, isSuccess: true };
    res.send(data)
  })
  .delete('/:id', (req, res) => {
    const id = +req.params.id;
    model.deleteWorkout(id);
    const data = { data: id, isSuccess: true };
    res.send(data)
  });

module.exports = router;