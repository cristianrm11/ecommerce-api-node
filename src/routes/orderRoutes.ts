import express from 'express'

import { createOrder, getAllOrders, updateOrderStatus, deleteOrder } from '../controllers/orderController'

const router = express.Router()

// router.post('/', createOrder)
router.get('/', getAllOrders)
// router.put('/:id', updateOrderStatus)
// router.delete('/:id', deleteOrder)

export default router