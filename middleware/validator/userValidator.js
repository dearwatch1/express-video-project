import { body } from 'express-validator'
import { validator } from './errorBack.js'

const register = validator([
    body('username')
        .notEmpty().withMessage('用户名不能为空').bail()
        .isLength({ min: 3 }).withMessage('用户名长度不能小于3'),
    body('email')
        .notEmpty().withMessage('邮箱不能为空').bail()
        .isEmail().withMessage('必须输入邮箱格式')
])

export { register }