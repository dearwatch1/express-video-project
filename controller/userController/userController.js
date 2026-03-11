import { User } from "../../model/index.js"

const userPost = async (req, res) => {
    console.log(req.body)
    const userModel = new User(req.body)
    const dbBack = await userModel.save()
    //res.json({ path: '/user-register', body: req.body })
    user = dbBack.toJSON()
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

export { userPost, userGet, userDelete }