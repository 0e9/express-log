'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const yaml = require('read-yaml')
const config = yaml.sync('config.yml')
const logger = require('./src/logger')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
if (config.debug) {
    app.use(logger)
}

app.use(function(req, res, next){
  res.send('log')
})

app.listen(3000)