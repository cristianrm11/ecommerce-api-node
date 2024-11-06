import { Request, Response } from 'express'
import { OrderService } from '../services/orderService'
import { Order, OrderProduct } from '../models/order'

const orderService = new OrderService()

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await orderService.getAllOrders()
        res.json(orders)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' })
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await orderService.getOrderById(req.params.id)
        if (!order) {
            return res.status(404).json({ message: 'Order not found' })
        }
        res.json(order)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order' })
    }
}


export const createOrder = async (req: Request, res: Response) => {
    try {
        const { userId, products }: { userId: string, products: OrderProduct[] } = req.body

        if (!userId || !products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: 'Invalid request data' })
        }

        const order = await orderService.createOrder(userId, products)
        return res.status(201).json(order)
    } catch (error) {
        return res.status(500).json({ message: 'Error creating order' })
    }
}

export const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { status } = req.body
        const { id } = req.params

        if (!['pending', 'cancelled', 'completed'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' })
        }

        const updatedOrder = await orderService.updateOrderStatus(id, status)
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' })
        }

        res.json(updatedOrder)
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status' })
    }
}

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleted = await orderService.deleteOrder(id)

        if (!deleted) {
            return res.status(404).json({ message: 'Order not found' })
        }

        res.status(204).send()
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order' })
    }
}
