import { validationResult } from "express-validator"
const errorBack = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(401).json({ error: errors.array() })
    }
    next()
}

const validator = (validations) => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validate => validate.run(req)))
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(401).json({ error: errors.array() })
        }
        next()
    }
}

export { errorBack, validator }