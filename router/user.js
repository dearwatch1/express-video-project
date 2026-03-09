import express from 'express'

import { userGet, userDelete } from '../controller/userController/userController.js'
const router = express.Router()

router
    .get('/list', userGet)
    .delete('/delete', userDelete)

export { router }