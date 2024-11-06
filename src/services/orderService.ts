import { Order, OrderProduct } from '../models/order'
import { orders } from '../data/dummyData'
import { ProductService } from './productService'

const SHIPPING_FEE = 5.99

export class OrderService {
    private productService: ProductService

    constructor() {
        this.productService = new ProductService()
    }

    async createOrder(userId: string, orderProducts: OrderProduct[]): Promise<Order> {
        const productsWithCost = await this.calculateOrderProductsCost(orderProducts)

        const totalCost = this.calculateTotalCost(productsWithCost)

        const newOrder: Order = {
            id: (orders.length + 1).toString(),
            userId,
            products: productsWithCost,
            totalCost,
            status: 'pending'
        }

        orders.push(newOrder)

        return newOrder
    }

    async getAllOrders(): Promise<Order[]> {
        return orders
    }

    async getOrderById(id: string): Promise<Order | undefined> {
        return orders.find(order => order.id === id)
    }

    async updateOrderStatus(id: string, status: 'pending' | 'cancelled' | 'completed'): Promise<Order | undefined> {
        const order = await this.getOrderById(id)
        if (order) {
            order.status = status
        }
        return order
    }

    private async calculateOrderProductsCost(orderProducts: OrderProduct[]): Promise<OrderProduct[]> {
        const productsWithCost = await Promise.all(orderProducts.map(async (orderProduct) => {
            const product = await this.productService.getProductById(orderProduct.productId)
            if (!product) throw new Error(`Product with ID ${orderProduct.productId} not found`)

            return {
                ...orderProduct,
                cost: product.cost * orderProduct.quantity
            }
        }))
        return productsWithCost
    }

    private calculateTotalCost(orderProducts: OrderProduct[]): number {
        const productsCost = orderProducts.reduce((acc, product) => acc + product.cost, 0)
        return productsCost + SHIPPING_FEE
    }

    async deleteOrder(id: string): Promise<boolean> {
        const order = await this.getOrderById(id)
        if (!order) return false

        const index = orders.indexOf(order)
        if (index !== -1) {
            orders.splice(index, 1)
            return true
        }
        return false
    }
}