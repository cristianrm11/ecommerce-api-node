import api from './api'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

api.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})