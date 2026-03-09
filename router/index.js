import express from 'express'
import { router as routerVideo } from './video.js'
import { router as routerUser } from './user.js'

const router = express.Router()

router.use('/video', routerVideo)
router.use('/user', routerUser)

export { router }