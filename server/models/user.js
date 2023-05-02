const fs = require("fs");
// const data = require('../data/workouts.json');
const jwt = require('jsonwebtoken');
const { connect, ObjectId, DB_Name } = require('./mongo');

const path = require('path');

const COL_ALLWORKOUTS = 'users';


const data = [
    {
        "name": "John Doe",
        "email": "john@doe.com",
        "password": "123456",
        "photo": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
        "role": "admin",
    },
    {
        "name": "Jane Doe",
        "email": "jane@doe.com",
        "password": "123456",
        "photo": "https://robohash.org/autemquidemvoluptatem.png?size=50x50&set=set1",
        "role": "user",
    },
]

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




async function getById(id) {
  const col = await collection('allWorkouts');
  const items = await col.find().toArray();
  for(item in items){
    //console.log(item);
    // console.log(items[item])
    const it = items[item];
    // console.log(it[username])
    return it[username];
  }
  return [];
}

async function add(workout, page=1, pageSize=30) {
  const col = await collection('allWorkouts');
  const items = await col.find().skip((page-1) * pageSize).limit(pageSize).toArray();
  

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


async function update(workout) {
  const col = await collection('allWorkouts');
  const result = await col.findOneAndUpdate(
    { _id: ObjectId(workout.id) },
    { $set: workout },
    { returnDocument: 'after' }
  )
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


//Login Tokens

async function login(name, password) {
    const col = await collection('allWorkouts');
    const user = await col.findOne({ [name]: { $exists: true } });
    
    if (!user) {
        throw new Error('User not found');
    }
    if (password !== password) {
        throw new Error('Invalid password');
    }

    const cleanUser = { ...user, password: undefined };
    const token = await generateTokenAsync(cleanUser, process.env.JWT_SECRET, '1d');

    return { token };
}

async function oAuthLogin(provider, accessToken) {
    // validate the access token
    // if valid, return the user
    // if not, create a new user
    // return the user
}

function generateTokenAsync(user, secret, expiresIn) {
    return new Promise( (resolve, reject) => {
        jwt.sign(user, secret, { expiresIn }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

function verifyTokenAsync(token, secret) {
    return new Promise( (resolve, reject) => {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        });
    });
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
  login,
  oAuthLogin,
  generateTokenAsync,
  verifyTokenAsync,

};