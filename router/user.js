import express from 'express'

import { userGet, userDelete, userPost, userLogin } from '../controller/userController/userController.js'
import { register, mylogin } from '../middleware/validator/userValidator.js'
import { verifyjwt } from '../util/jwt.js'
const router = express.Router()

router
    .post('/registers', register, userPost)
    .post('/login', mylogin, userLogin)
    .get('/lists', verifyjwt, userGet)
    .delete('/delete', userDelete)

export { router }