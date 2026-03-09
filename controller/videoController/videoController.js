const videoGetList = async (req, res) => {
    console.log(req.method)
    res.send('/video-list')
}

const videoGetUser = async (req, res) => {
    console.log(req.method)
    res.send('/video-user')
}

export { videoGetList, videoGetUser }