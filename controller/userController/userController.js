const userGet = async (req, res) => {
    console.log(req.method)
    res.send('/user-list')
}

const userDelete = async (req, res) => {
    console.log(req.method)
}

export { userGet, userDelete }