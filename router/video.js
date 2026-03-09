import express from 'express'
import { videoGetList, videoGetUser } from '../controller/videoController/videoController.js'
const router = express.Router()

router
    .get('/list', videoGetList)
    .get('/user', videoGetUser)

export { router }