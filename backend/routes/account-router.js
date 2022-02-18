import express from 'express'
import { AccountController } from '../controllers/account-controller.js'

export const router = express.Router()

const controller = new AccountController()

router.post('/register', controller.anonymousCheck, controller.register)

router.post('/login', controller.anonymousCheck, controller.login)

router.get('/logout', controller.loggedInCheck, controller.logout)
