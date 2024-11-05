import { Request, Response } from 'express'
import { ProductService } from '../services/productService'
import { Product } from '../models/product'

const productService = new ProductService()

export const createProduct = async (req: Request, res: Response) => {
    try {
        const mapProductData: Product = req.body
        const newProduct = await productService.createProduct(mapProductData)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json({ message: 'Error creating the product' })
    }
}

export const getAllProducts = async(req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const mapUpdatedProduct: Partial<Product> = req.body

        const updatedProduct = await productService.updateProduct(id, mapUpdatedProduct)

        if (updatedProduct) {
            res.json(updatedProduct)
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating the product' })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const isDeleted = await productService.deleteProduct(id)
        if (isDeleted) {
            res.status(204).send()
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting the product' })
    }
}