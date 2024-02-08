const { DataTypes } = require('sequelize')
const db = require('../database/index')

// create model for structure table tbl_user
const Order = db.define('tbl_order', {
    list_menu: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Order