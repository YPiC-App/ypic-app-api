const express = require('express');
const cors = require('cors');

const app = express();   
app.use(cors({ origin: true }));

const getUser = (db) => async (req,res) => {
  const uid = req.params.uid; 

  const userData = await db.doc(uid).get();

  return res.send(userData.data());
}

const updateUser = (db, auth) => (req,res) => {};

const user = ({ admin }) => {
  const db = admin.firestore().collection("Users");
  const auth = admin.auth();

  app.get('/:uid', getUser(db))
  app.post('/:uid', getUser(db,auth))

  return app; 
}

module.exports = user;