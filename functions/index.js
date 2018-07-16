'use strict'

const functions = require('firebase-functions')
const app = require('./app')

module.exports.HelperIntents = functions.https.onRequest(app)