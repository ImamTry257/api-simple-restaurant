const { Sequelize } = require('sequelize')

// import
const {
	DB,
	USER,
	PASSWORD,
	HOST,
	PORT,
	DIALECT
} = require('../configs/database.config')


// connect db
const database = new Sequelize(DB, USER, PASSWORD, {
	host: HOST,
	port: PORT,
	dialect: DIALECT
})

module.exports = database