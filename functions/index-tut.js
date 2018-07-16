const functions = require('firebase-functions')
const admin = require('firebase-admin')

const serviceAccount = require('./config/me-bot-config.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://me-bot-one.firebaseio.com/"
});

const db = admin.firestore()






// Change some data when it is added to a Firestore Database
exports.makeUp = functions.firestore.document('tests/{docID}')
  .onCreate((snap, context) => {
    const testStuff = snap.data()
    console.log(testStuff)
    const newdate = new Date(testStuff.timeStamp)
    db.collection('tests').doc().update({ dtime: newdate })
    return 0
  })