import mongoose from "mongoose"
import md5 from "md5"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => md5(value),//加密
        select: false//查询时要不要返回
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

export { userSchema }