// This is your server file :)
import express, { Request, Response } from 'express'
import pageRouter from './routes/page.routes'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// Set the view engine in your `server.ts` to 'EJS'.
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public'))) // Set public assets directory

app.use('/', pageRouter)


// 404 Fallback
app.use((req: Request, res: Response) => {
    res.status(404).render('404')
  })
  
// Start Server
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
  })