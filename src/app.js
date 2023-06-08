import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import instanceMongodb from './database/init.mongodb'
import { checkOverload } from './helpers/check.connect'

const app = express()




// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(
    cors({
        origin: [process.env.CLIENT_URL],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);

// initdb
checkOverload()

// init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello',
    })
})

// init

export default app