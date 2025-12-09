const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);
    if (token) {
        req.id = decoded.id;
        next();
    } else {
        return res.status(403).json({
            message: "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware
}