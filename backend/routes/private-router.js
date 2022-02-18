import express from 'express'
import { PrivateController } from '../controllers/private-controller.js'

export const router = express.Router()

const controller = new PrivateController()

router.get('/:id/overview', controller.auth, controller.access)
