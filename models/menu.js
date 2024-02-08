const { DataTypes } = require('sequelize')
const db = require('../database/index')

// create model for structure table tbl_user
const Menu = db.define('tbl_menu', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Menu