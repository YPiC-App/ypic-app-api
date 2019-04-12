const functions = require("firebase-functions");

module.exports = ({ admin }) => async user => {
  const db = admin.firestore();
  const { uid, displayName, photoURL, email } = user;

  return await db
    .collection("Users")
    .doc(uid)
    .set({ uid, displayName, photoURL, email });
};
