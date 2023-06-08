import app from './src/app'
import dotenv from 'dotenv'
dotenv.config()


const port = process.env.PORT || 8080

const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})


process.on('SIGNINT', () => {
    server.close(() => console.log('Exit server'))
})