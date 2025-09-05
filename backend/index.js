import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js'
import userRoutes from './routes/user.routes.js'
dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT  || 5000

app.use('/api/auth', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`)
    connectDb()
})