const express = require('express')
const Router = express.Router()

// Import All Controller
const {formationsController} = require('../controllers') // Akan otomatis mengambil file index.js nya

Router.get('/stats', formationsController.getFormations)

module.exports = Router