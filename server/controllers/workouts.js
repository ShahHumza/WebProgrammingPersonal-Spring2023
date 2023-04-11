const express = require('express');
const model = require('../models/model');
const router = express.Router();

router
  .get('/', (req, res) => {
    const list = model.getWorkouts();
    const data = { data: list, total: list.length, isSuccess: true };
    res.send(data)
  })
  .get('/search/:q', (req, res) => {
    const term = req.params.q;
    const list = model.searchWorkouts(term);
    const data = { data: list, total: list.length, isSuccess: true };
    res.send(data)
  })
  .get('/:id', (req, res) => {
    const id = +req.params.id;
    const workout = model.getWorkoutById(id);
    const data = { data: workout, isSuccess: true };
    res.send(data)
  })
  .post('/', (req, res) => {
    const workout = req.body;
    model.addWorkout(workout);
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