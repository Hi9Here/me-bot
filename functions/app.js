'use strict'

const askForPermission = require('./intents/ask-for-permission')
const serviceAccount = require('./config/me-bot-config.json')

const admin = require('firebase-admin')

const version = "0.1"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://me-bot-one.firebaseio.com/"
})

const db = admin.firestore()
const app = require('actions-on-google').dialogflow()

const addIntents = (...args) => {
  for (let i = 0; i < args.length; i++) {
    for (const key in args[i]) {
      if (args[i].hasOwnProperty(key)) app.intent(key, args[i][key])
    }
  }
}

console.log(`Version V${version}`);

addIntents(
  askForPermission
)

app.intent('version', (conv) => {
  conv.ask(`Version number is ${version}`)
})

module.exports = app