import { User } from "../../model/index.js"
import bcrypt from 'bcrypt'
import md5 from 'md5'

const userPost = async (req, res) => {
    console.log(req.body)
    const userModel = new User(req.body)
    const dbBack = await userModel.save()
    //res.json({ path: '/user-register', body: req.body })
    const user = dbBack.toJSON()
    delete user.password
    res.status(201).json({
        user
    })
}

const userGet = async (req, res) => {
    console.log(req.method)
    res.send('/user-list')
}

const userDelete = async (req, res) => {
    console.log(req.method)
}

//用户登录
const userLogin = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    //先查找邮箱,如果找到，返回user，user里面有password
    const user = await User.findOne({ email: email }).select('+password').lean()//要加回来 //.lean()把user转换为普通js对象
    if (!user) {
        throw new Error('该邮箱未注册')
    }
    else {
        //const isPassword = await bcrypt.compare(password, user.password)
        const isPassword = md5(password) === user.password
        if (!isPassword) {
            throw new Error('邮箱或密码不正确')
        }

        delete user.password
        delete user._id
        delete user.image
        delete user.createAt
        delete user.createAt
        delete user.updateAt
        delete user.__v


        res.send({
            status: 200,
            msg: '登录成功',
            data: user
        })
    }
}

export { userPost, userGet, userDelete, userLogin }