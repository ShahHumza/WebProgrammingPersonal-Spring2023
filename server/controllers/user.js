const express = require('express');
const model = require('../models/user');
const { requireLogin } = require('../middleware/authorization');
const router = express.Router();

router
    .get('/',(req, res, next) => {
        model.getAll(+req.query.page, +req.query.pageSize)
            .then(list => {
                const data = { data: list.items, total: list.total, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    //get Workouts
    .get("/getWorkouts/:email", (req, res, next) => {
        const email = req.params.email;
        model.get(email)
          .then(workouts => {
            if (workouts) {
              const data = { data: workouts, total: Object.keys(workouts).length, isSuccess: true };
              res.send(data);
            } else {
              res.status(404).send('User not found');
            }
          }).catch(next);
      })

      //get Total Workouts number
    .get("/totalWorkouts/:email", (req, res, next) => {
        const email = req.params.email;
        model.count(email)
          .then(workouts => {
            if (workouts) {
              const data = { data: workouts, total: Object.keys(workouts).length, isSuccess: true };
              res.send(data);
            } else {
              res.status(404).send('User not found');
            }
          }).catch(next);
      })

    .get('/search/:q' , (req, res, next) => {

        model.search(req.params.q, +req.query.page, +req.query.pageSize)
            .then(list => {
                const data = { data: list.items, total: list.total, isSuccess: true };
                res.send(data)
            }).catch(next);
        
    })

    .get('/:id' , (req, res, next) => {

        model.getById(req.params.id)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);

    })

    .post('/', (req, res, next) => {

        model.add(req.body)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);

    })

    //add Workouts
    .post('/addWorkout/:email', (req, res, next) => {
        const { email } = req.params;
        const workoutData = req.body;
          
        model.addWorkout(email, workoutData)
          .then(success => {
            const data = { isSuccess: success };
            res.send(data);
          })
          .catch(next);
      })
    //delete Workouts
    .post('/deleteWorkout/:email', (req, res, next) => {
        const { email } = req.params;
        const workoutName = req.body.name;
        
        model.deleteWorkout(email, workoutName)
            .then(success => {
            const data = { isSuccess: success };
            res.send(data);
            })
            .catch(next);
    })
    

    .patch('/' , (req, res, next) => {

        model.update(req.body)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);

    })

    .delete('/:id' , (req, res, next) => {

        model.deleteItem(req.params.id)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .post('/seed' , (req, res, next) => {
        model.seed()
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .post('/login', (req, res, next) => {
        model.login(req.body.email, req.body.password)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

    .post('/oAuthLogin', (req, res, next) => {
        model.oAuthLogin(req.body.provider, req.body.accessToken)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

module.exports = router;