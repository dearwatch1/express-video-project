import express from 'express'
const router = express.Router()

router
    .get('/list', (req, res) => {
        console.log(req.method)
        res.send('/video-list')
    })
    .get('/user', (req, res) => {
        console.log(req.method)
        res.send('/video-user')
    })

export { router }