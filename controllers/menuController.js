// init model
const Menu = require('../models/menu')

exports.all = async (req, res) => {

    try {

        // get all data menu
        const dataMenu = await Menu.findAll()

        return res.status(200).json({
            status: 200,
            success: true,
            message: '',
            data: { menu: dataMenu }
        })
    }

    catch (err) {
        console.log(err)

        return res.status(500).json({
            status: 500,
            success: false,
            message: 'Internal Server Error'
        })
    }

}

// store method
exports.create = async (req, res) => {

    try {
        // init param body
        const { name, price } = req.body

        // store data menu
        const menuCreate = await Menu.create({
            name,
            price
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: 'Data Menu berhasil dibuat',
            data: { menuCreate }
        })
    } catch (err) {
        console.log(err)

        return res.status(500).json({
            status: 500,
            success: false,
            message: 'Internal Server Error'
        })
    }
}