import { body } from 'express-validator'
import { validator } from './errorBack.js'
import { User } from "../../model/index.js"


const register = validator([
    body('username')
        .notEmpty().withMessage('用户名不能为空').bail()
        .isLength({ min: 3 }).withMessage('用户名长度不能小于3'),
    body('email')
        .notEmpty().withMessage('邮箱不能为空').bail()
        .isEmail().withMessage('必须输入邮箱格式').bail()
        .custom(async val => {
            const emailValidate = await User.findOne({ email: val })
            if ((emailValidate)) {
                //return Promise.reject('邮箱已被注册')
                throw new Error('邮箱已被注册')
            }
            return true//必须返回,不然是undefined，视为不通过
        }),
    body('password')
        .notEmpty().withMessage('密码不能为空').bail()
        .isLength({ min: 6 }).withMessage('密码长度不能小于6').bail()
        .custom((val, { req }) => {
            if (req.body.comfirmPassword && val !== req.body.comfirmPassword) {
                throw new Error('两次输入的密码不一致')
            }
            return true
        }),
    body('phone')
        .notEmpty().withMessage('手机号不能为空').bail()
        .isMobilePhone('zh-CN').withMessage('手机号格式不正确')
])

const mylogin = validator([
    body('email')
        .notEmpty().withMessage('邮箱不能为空').bail()
        .isEmail().withMessage('必须输入邮箱格式'),
    body('password')
        .notEmpty().withMessage('密码不能为空').bail()
        .isLength({ min: 6 }).withMessage('密码长度不能小于6')
])

export { register, mylogin }