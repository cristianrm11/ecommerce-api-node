import express, {Request, Response}  from 'express'
import dotenv from 'dotenv';

dotenv.config()

const app = express()

app.use(express.json())

app.get('/running', (req: Request, res: Response) => {
    res.status(200).json({status: 'Ok'})
})

export default app