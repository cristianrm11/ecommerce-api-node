import { Product } from '../models/product'
import { products } from '../data/dummyData'

export class ProductService {
    async getAllProducts(): Promise<Product[]> {
        return products
    }
}