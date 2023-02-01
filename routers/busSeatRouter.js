const express = require('express')
const Router = express.Router()

// Import All Controller
const {busSeatController} = require('../controllers') // Akan otomatis mengambil file index.js nya

Router.get('/details', busSeatController.details)

module.exports = Router