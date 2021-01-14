const config = require('../config/index')

/**
 * Information log
 * @param {object} data Data
 */
const infoLog = (data) => {
	console.log('\x1b[32m%s:\x1b[0m', 'INFO') // eslint-disable-line no-console
	console.log(data) // eslint-disable-line no-console
}

/**
 * Debug log
 * @param {object} data Data
 */
const debugLog = (data) => {
	if (config.debug) {
		console.log('\x1b[34m%s:\x1b[0m', 'DEBUG') // eslint-disable-line no-console
		console.log(data) // eslint-disable-line no-console
	}
}

/**
 * Error log
 * @param {object} data Data
 */
const errorLog = (data) => {
	console.log('\x1b[31m%s:\x1b[0m', 'ERROR') // eslint-disable-line no-console
	console.log(data) // eslint-disable-line no-console
}

module.exports = {
	infoLog,
	debugLog,
	errorLog
}
