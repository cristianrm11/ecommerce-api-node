import { Product } from '../models/product'
import { products } from '../data/dummyData'

export class ProductService {

    async createProduct (newProduct: Product): Promise<Product> {
        products.push(newProduct)
        return newProduct
    }

    async getAllProducts(): Promise<Product[]> {
        return products
    }

    async updateProduct(id: string, updatedProduct: Partial<Product>): Promise<Product | undefined> {
        const productIdx = products.findIndex(product => product.id === id)
        if (productIdx === -1) return undefined
        
        products[productIdx] = { ...products[productIdx], ...updatedProduct }
        
        return products[productIdx]
    }

    async deleteProduct(id: string): Promise<boolean> {
        const productIdx = products.findIndex(product => product.id === id)
        if (productIdx === -1) return false

        products.splice(productIdx, 1)

        return true
    }
}