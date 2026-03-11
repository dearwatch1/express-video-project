import express from 'express'
import { videoGetList, videoGetUser } from '../controller/videoController/videoController.js'
const router = express.Router()

router
    .get('/lists', videoGetList)
    .get('/users', videoGetUser)

export { router }