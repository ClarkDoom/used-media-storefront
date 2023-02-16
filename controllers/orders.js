const { Order } = require("../models")

const create = async(req,res) => {
  try {
    const order = await Order.create(req.body)
    res.status(200).json(order)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create
}