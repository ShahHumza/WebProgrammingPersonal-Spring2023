const data = require('../data/workouts.json');
const { connect, ObjectId } = require('./mongo');

// function getWorkouts(username) {
//   // console.log(username)
//   return data[username]
// }

const COLLECTION_NAME = 'workouts';

async function collection() {
  const db = await connect();
  return db.collection(COLLECTION_NAME);
}

async function getWorkouts(username) {
  const col = await collection();
  return await col.find({ username: username }).toArray();
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
  const w = {name: workout.name, duration: workout.duration};
  console.log(username)
  console.log(workout)
  if (data[username]) {
    data[username].push(w);
  } else {
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