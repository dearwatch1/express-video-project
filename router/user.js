import express from 'express'

import { userGet, userDelete, userPost } from '../controller/userController/userController.js'
import { register } from '../middleware/validator/userValidator.js'
const router = express.Router()

router
    .post('/registers', register, userPost)
    .get('/lists', userGet)
    .delete('/delete', userDelete)

export { router }