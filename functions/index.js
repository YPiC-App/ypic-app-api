const admin = require("firebase-admin");
const functions = require("firebase-functions");

const SetUserOnCreate = require("./modules/set-user-on-create");

admin.initializeApp();

const context = { admin };

exports.setUserDataOnCreate = functions.auth
  .user()
  .onCreate(SetUserOnCreate(context));
