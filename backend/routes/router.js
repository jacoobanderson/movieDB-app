import { router as privateRouter } from './private-router.js'
import { router as accountRouter } from './account-router.js'
// import { router as indexRouter } from './index-router.js'
import express from 'express'

export const router = express.Router()

// router.use('/', indexRouter)
router.use('/api/account', accountRouter)
router.use('/api/user', privateRouter)

router.use('*', (req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
