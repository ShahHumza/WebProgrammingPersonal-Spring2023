const express = require('express');
const model = require('../models/workouts');
const router = express.Router();

router
//change /:username => /
.get("/getWorkoutsTest", (req, res, next) => {
  model.get()
      .then(list => {
          const data = { data: list, total: Object.keys(list).length, isSuccess: true };
          res.send(data)
      }).catch(next);
})
.get('/:username', (req, res) => {
  const username = req.params.username;
  model.getByUser(username)
    .then((list) => {
      const data = { data: list, total: list.length, isSuccess: true };
      // console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      const data = { error: err.message, isSuccess: false };
      res.status(500).send(data);
    });
})
// .get('/:username',(req, res) => {
//   try {
//     const username = req.params.username;
//     // console.log(username)
//     const list = model.getWorkouts(username);
//     console.log(list)
//     const data = { data: list, total: list.length, isSuccess: true };
//     console.log(data)
//     res.send(data);
//   } catch (err) {
//     console.error(err);
//     const data = { error: err.message, isSuccess: false };
//     res.status(500).send(data);
//   }
// })


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
    const workout = model.getById(id);
    const data = { data: workout, isSuccess: true };
    res.send(data);
  } catch (err) {
    console.error(err);
    const data = { error: err.message, isSuccess: false };
    res.status(500).send(data);
  }
})
  .post('/', (req, res, next) => {
    const workout = req.body;
    model.add(workout)
    .then((list) => {
      const data = { data: list, total: list.length, isSuccess: true };
      // console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      const data = { error: err.message, isSuccess: false };
      res.status(500).send(data);
    });
  })
  .patch('/:id', (req, res) => {
    const workout = req.body;
    model.update(workout);
    const data = { data: workout, isSuccess: true };
    res.send(data)
  })
  .post('/deleteWorkout', (req, res, next) => {
    const item = req.body;
    model.deleteItem(item)
    .then((list) => {
      const data = { data: list, total: list.length, isSuccess: true };
      // console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      const data = { error: err.message, isSuccess: false };
      res.status(500).send(data);
    });
  })

module.exports = router;