export interface Order {
    id: string,
    userId: string;
    products: OrderProduct[];
    totalCost: number;
    status: 'pending' | 'cancelled' | 'completed'
}

export interface OrderProduct {
    productId: string;
    quantity: number;
    cost: number;
}