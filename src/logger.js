'use strict';

const winston = require('winston')
const winstonDaily = require('winston-daily-rotate-file')
const expressWinston = require('express-winston')
const moment = require('moment')
const tsFormat = () => moment().format('YYYY-MM-DD HH:mm:ss');

winston.emitErrs = true
expressWinston.requestWhitelist.push('body')
expressWinston.responseWhitelist.push('body')

const logger = expressWinston.logger({
    transports: [
        new winstonDaily({
            level: 'info',
            filename: './logs/api.log',
            datePattern: 'yyyy-MM-dd.',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false,
            expressFormat: true,
            timestamp: tsFormat,
            prepend: true,
        })
    ],
    exitOnError: false
})

module.exports = logger