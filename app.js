import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './router/index.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(morgan('dev'))


const PORT = process.env.PORT || 3000

//挂载路由
app.use('/api/v1', router)

//挂载统一处理服务端错误中间件
// app.use(errorHandler())

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})