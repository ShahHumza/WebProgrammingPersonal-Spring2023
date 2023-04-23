const data = require('../data/workouts.json');

function getWorkouts(username) {
  // console.log(username)
  return data[username]
}

function getWorkoutById(id) {
  for (const username in data) {
    const workouts = data[username];
    const workout = workouts.find(w => w.id === id);
    if (workout) {
      return workout;
    }
  }
  return null;
}

function addWorkouts(workout) {
  const username = workout.username;
  if (data[username]) {
    workout.id = data[username].length + 1;
    data[username].push(workout);
  } else {
    workout.id = 1;
    data[username] = [workout];
  }
}

function updateWorkout(workout) {
  const username = workout.username;
  if (data[username]) {
    const index = data[username].findIndex(w => w.id === workout.id);
    data[username][index] = workout;
  }
}

function deleteWorkout(id, username) {
  if (data[username]) {
    const index = data[username].findIndex(w => w.id === id);
    data[username].splice(index, 1);
  }
}

module.exports = {
  getWorkouts,
  getWorkoutById,
  addWorkouts,
  updateWorkout,
  deleteWorkout,

};