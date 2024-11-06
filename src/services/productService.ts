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

    async getProductById(id: string): Promise<Product | undefined> {
        return products.find(product => product.id === id)
    }

    async updateProduct(id: string, updatedProduct: Partial<Product>): Promise<Product | undefined> {
        const product = await this.getProductById(id)
        if (!product) return undefined
        
        Object.assign(product, updatedProduct)
        
        return product
    }

    async deleteProduct(id: string): Promise<boolean> {
        const product = await this.getProductById(id)
        if (!product) return false

        const productIdx = products.indexOf(product)
        products.splice(productIdx, 1)

        return true
    }
}