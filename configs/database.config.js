require('dotenv').config()

module.exports = {
	HOST: process.env['HOST'],
	USER: process.env['USER_DB'],
	PASSWORD: process.env['PASSWORD'],
	DB: process.env['DB'],
	PORT: process.env['PORT_DB'],
	DIALECT: process.env['DIALECT']
}