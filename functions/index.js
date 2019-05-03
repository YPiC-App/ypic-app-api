const admin = require("firebase-admin");
const functions = require("firebase-functions");

const setUserOnCreate = require("./modules/set-user-on-create");
const user = require("./modules/user");

admin.initializeApp();

const context = { admin };

exports.setUserDataOnCreate = functions.auth
  .user()
  .onCreate(setUserOnCreate(context));

exports.user = functions.https.onRequest(user(context));