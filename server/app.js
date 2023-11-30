import cors from 'cors'
import express from 'express'
import './src/config.js'
import cookieParser from 'cookie-parser'
import { errorHandler } from './src/middlewares/errorHandler.js'
import { connectToDatabase } from './src/database.js'
import authRoutes from './src/routes/auth.js'
import videoRoutes from './src/routes/videos.js'
import userRoutes from './src/routes/users.js'
import http from 'http'
import { initializeSocket } from './sockets/ws.js'


// Create an instance of the Express app
const app = express()
// Create an HTTP server using the Express app
const server = http.createServer(app)
// Initialize WebSocket with the created server
initializeSocket(server)


// Middleware setup
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(errorHandler)

// Set up routes for different parts of the API
app.use('/api/auth', authRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/users', userRoutes)


// Start the server and listen on port 3000
server.listen(3000, () => {
  connectToDatabase()
  console.log('Connected to server!')
})
