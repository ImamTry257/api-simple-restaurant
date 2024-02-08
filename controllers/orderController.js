// init model
const Order = require('../models/order')

exports.all = async (req, res) => {

    try {

        // get all data order
        const dataOrder = await Order.findAll()

        return res.status(200).json({
            status: 200,
            success: true,
            message: '',
            data: { order: dataOrder }
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
        const { list_menu, email, status } = req.body

        // store data order
        const orderCreate = await Order.create({
            list_menu,
            email,
            status
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: 'Order berhasil dibuat',
            data: { orderCreate }
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

// find by id to track status order
exports.find = async (req, res) => {
    try {

        const { id } = req.params

        // find order by id
        const order = await Order.findOne({
            where: {
                id: id
            }
        })

        // check data order
        if (!order) { // empty data

            return res.status(404).json({
                status: 404,
                success: false,
                message: 'Data not found'
            })
        } else {

            return res.status(200).json({
                status: 200,
                success: true,
                data: {
                    list_menu: order.list_menu,
                    email: order.email,
                    status: order.status
                }
            })

        }
    } catch (err) {
        console.log(err)

        return res.status(500).json({
            status: 500,
            success: false,
            message: 'Internal Server Error'
        })
    }
}

// update status data order by kicthen service 
exports.update = async (req, res) => {

    try {

        let { id } = req.params

        let { status } = req.body

        // update data
        const updateOrder = await Order.update(req.body, {
            where: {
                id: id
            }
        })

        // check status update data
        if (!updateOrder[0]) {
            return res.status(200).json({
                success: false,
                status: 200,
                message: 'Update data Order failed'
            })
        }

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Update data Order successfully'
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