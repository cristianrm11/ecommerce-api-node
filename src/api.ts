import express, { Request, Response}  from 'express'
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)

app.get('/running', (req: Request, res: Response) => {
    res.status(200).json({status: 'Ok'})
})

export default app