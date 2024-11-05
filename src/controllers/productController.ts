import { Request, Response } from 'express'
import { ProductService } from '../services/productService'

const productService = new ProductService()

export const getAllProducts = async(req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' })
    }
}