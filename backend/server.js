import express from 'express'
import { connectDB } from './config/mongoose.js'
import session from 'express-session'
import helmet from 'helmet'
import logger from 'morgan'
import { router } from './routes/router.js'

try {
  await connectDB()

  const app = express()

  app.use(helmet())
  app.use(logger('dev'))

  app.use(express.urlencoded({ extended: false }))

  // Session set up.
  const sessionOptions = {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: 'strict'
    }
  }

  app.use(session(sessionOptions))

  app.use('/', router)

  app.use(function (err, req, res, next) {
    // Sends a Not found page.
    if (err.status === 404) {
      return res
        .status(404)
    } else if (err.status === 403) {
      // Sends a forbidden page.
      return res
        .status(403)
    }

    // 500 Internal Server Error, all other send this response in production.
    if (req.app.get('env') !== 'development') {
      return res
        .status(500)
    }

    // Development
    res
      .status(err.status || 500)
  })

  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
  })
} catch (error) {
  console.error(error)
  process.exitCode = 1
}
