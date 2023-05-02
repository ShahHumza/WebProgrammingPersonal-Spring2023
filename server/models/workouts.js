const fs = require("fs");
const data = require('../data/workouts.json');
const { connect, ObjectId, DB_Name } = require('./mongo');

const path = require('path');

const COL_ALLWORKOUTS = 'allWorkouts';

// function getWorkouts(username) {
//   // console.log(username)
//   return data[username]
// }

// const COLLECTION_NAME = 'workouts';
async function collection(COLLECTION_NAME) {
  const db = await connect();
  // console.log(COLLECTION_NAME)
  return db.collection(COLLECTION_NAME);
}

async function getAll(page=1, pageSize=30) {
  const col = await collection(COL_ALLWORKOUTS);
  const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
  const total = await col.countDocuments(); // Total documents, which is each box seperated with an ID
  return { items, total };
}

// Read the file
const allWorkoutsJSON = fs.readFileSync(path.join(__dirname, "../data/workouts.json"), "utf-8");
const allWorkoutsDataScraped = JSON.parse(allWorkoutsJSON);
console.log(allWorkoutsDataScraped)

async function insert(colName, dbScraped) {
  const col = await collection(colName);
  //const result = await col.insertMany(dbScraped);
  const result = await col.insertOne(dbScraped);//weird
  
}

async function get() {
  //await insertWorkouts("allWorkouts", allWorkoutsDataScraped); // Insert some documents into the collection
  const col = await collection('allWorkouts');
  console.log(col);
  const count = await col.countDocuments();
  console.log(`Number of documents in collection: ${count}`);
  const items = await col.find().toArray();
  return items;
}

async function getByUser(username, page=1, pageSize=30) {
  const col = await collection('allWorkouts');
  // console.log(col);
  const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
  for(item in items){
    //console.log(item);
    // console.log(items[item])
    const it = items[item];
    // console.log(it[username])
    return it[username];
  }
  return [];
}



function getById(id) {
  for (const username in data) {
    const workouts = data[username];
    const workout = workouts.find(w => w.id === id);
    if (workout) {
      return workout;
    }
  }
  return null;
}

async function add(workout, page=1, pageSize=30) {
  const col = await collection('allWorkouts');
  const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
  // //const newWorkout = { username: user, name: name, duration: duration }
  // const username = workout.username;
  // const it = items[0];
  // const it2 = it[username];
  // console.log(workout)
  // console.log(it2)

  const username = workout.username;
  const it = items.find(item => item[username]); // Find the item containing the correct username
  const it2 = it[username];
  it2.push({ date: new Date().toISOString().substr(0, 10), duration: workout.duration, name: workout.name }); // Add the new workout to the it2 array

  col.updateOne(
    { _id: it._id }, // Query to find the correct document
    { $set: { [username]: it2 } }, // Update the it2 field with the modified array
    (err, res) => {
      if (err) throw err;
      console.log('1 document updated');
      db.close();
    }
  );

  return it;
}

function update(workout) {
  const username = workout.username;
  if (data[username]) {
    const index = data[username].findIndex(w => w.id === workout.id);
    data[username][index] = workout;
  }
}

async function deleteItem(workout, page=1, pageSize=30) {
  const col = await collection('allWorkouts');
  const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
  
  const username = workout.username;
  const name = workout.name;
  const duration = workout.duration;
  const it = items.find(item => item[username]); // Find the item containing the correct username
  const it2 = it[username];
  const index = it2.findIndex(w => w.name === name && w.duration === duration); // Find the index of the workout with matching name and duration
  if (index !== -1) {
    it2.splice(index, 1); // Remove the workout from the it2 array at the found index
  }

  col.updateOne(
    { _id: it._id }, // Query to find the correct document
    { $set: { [username]: it2 } }, // Update the it2 field with the modified array
    (err, res) => {
      if (err) throw err;
      console.log('1 document updated');
      db.close();
    }
  );

  

  return items;
}

module.exports = {
  getByUser,
  getAll,
  getById,
  add,
  update,
  deleteItem,
  get,
  insert,




};