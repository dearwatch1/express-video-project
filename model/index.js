import mongoose from "mongoose"
import { userSchema } from "./userModel.js"
async function main() {
    mongoose.connect('mongodb://localhost:27017/express-video')
}

main().then(res => {
    console.log('mongo链接成功')
}).catch(err => {
    console.log(err)
    console.log('mongo链接失败')
})

const User = mongoose.model('User', userSchema)

export { User }