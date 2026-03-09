import express from 'express'
const router = express.Router()

router
    .get('/list', (req, res) => {
        console.log(req.method)
        res.send('/user-list')
    })

export { router }