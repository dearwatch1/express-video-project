import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { uuid as secretKey } from '../config/config.default.js'
// let myToken = jwt.sign({ username: 'lisi' }, '^_^', { expiresIn: '1h' })
// console.log(myToken)
// let jwts = jwt.verify(
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxpc2kiLCJpYXQiOjE3NzM0OTMwMDcsImV4cCI6MTc3MzQ5NjYwN30.QXrUXveBz53d40ZZoDMzOSA9okEESk8fQ0fbc0UxKew',
//     '^_^'
// )
// console.log(jwts)

const tojwt = promisify(jwt.sign)
const toverify = promisify(jwt.verify)

const createToken = async user => {
    const token = await tojwt({ user }, secretKey, { expiresIn: 60 * 60 * 24 })
    return token
}

const verifyjwt = async (req, res, next) => {
    let token = req.headers.authorization
    token = token ? token.split("Bearer ")[1] : null
    if (!token) {
        res.send({
            status: 402,
            error: "请传入token"
        })
    }
    try {
        let result = await toverify(token, secretKey)
        req.user = result//解码之后挂载到用户信息上，因为是中间件，后续接口可以用到
        next()
    } catch (error) {
        let msg = "无效token"
        if (error.name === "TokenExpiredError") {
            msg = "token已过期"
        }
        res.send({
            status: 402,
            error: msg
        })
    }
}

export { createToken, verifyjwt }