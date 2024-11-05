import { Order } from '../models/order'
import { Product } from '../models/product'

const products: Product[] = [
    {
        id: '1',
        name: 'Wireless Mouse',
        description: 'A high-quality wireless mouse for smooth navigation.',
        cost: 25.99,
        inStock: 50,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },
    {
        id: '2',
        name: 'Bluetooth Keyboard',
        description: 'A comfortable Bluetooth keyboard for typing with ease.',
        cost: 45.99,
        inStock: 30,
        createdAt: new Date('2024-02-01'),
        updatedAt: new Date('2024-02-01'),
    },
    {
        id: '3',
        name: 'Laptop Stand',
        description: 'An adjustable stand for your laptop for better ergonomics.',
        cost: 35.49,
        inStock: 100,
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01'),
    },
    {
        id: '4',
        name: 'USB-C Charging Cable',
        description: 'Fast charging USB-C cable for devices.',
        cost: 10.99,
        inStock: 200,
        createdAt: new Date('2024-04-01'),
        updatedAt: new Date('2024-04-01'),
    },
    {
        id: '5',
        name: 'External Hard Drive',
        description: '1TB external hard drive for data storage and backups.',
        cost: 75.99,
        inStock: 25,
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date('2024-05-01'),
    },
];

const orders: Order[] = [
    {
        id: '1',
        userId: '1',
        products: [
            { productId: '1', quantity: 1, cost: 25.99 },
            { productId: '2', quantity: 2, cost: 45.99 },
        ],
        totalCost: 25.99 + (2 * 45.99) + 5.99,
        status: 'pending',
    },
    {
        id: '2',
        userId: '2',
        products: [
            { productId: '3', quantity: 1, cost: 35.49 },
        ],
        totalCost: 35.49 + 5.99,
        status: 'completed',
    },
    {
        id: '3',
        userId: '3',
        products: [
            { productId: '4', quantity: 3, cost: 10.99 },
            { productId: '5', quantity: 1, cost: 75.99 },
        ],
        totalCost: (3 * 10.99) + 75.99 + 5.99,
        status: 'cancelled',
    },
    {
        id: '4',
        userId: '4',
        products: [
            { productId: '1', quantity: 1, cost: 25.99 },
            { productId: '3', quantity: 1, cost: 35.49 },
        ],
        totalCost: 25.99 + 35.49 + 5.99,
        status: 'completed',
    },
    {
        id: '5',
        userId: '5',
        products: [
            { productId: '2', quantity: 2, cost: 45.99 },
        ],
        totalCost: (2 * 45.99) + 5.99,
        status: 'pending',
    },
];

export { products, orders };