// User routes
const { Router } = require("express");
const userRouter = Router();

userRouter.post('/signin', (req, res) => {
    res.json({
        message: "signin"
    });
})

userRouter.post('/signup', (req, res) => {
    res.json({
        message: "signup"
    });
})

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "courses"
    });
})

module.exports = {
    userRouter
};