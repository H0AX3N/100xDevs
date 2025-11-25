// User routes
const { Router } = require("express");
const userRouter = Router();

userRouter.post('/signin', (req, res) => {
    res.send("signin");
})

userRouter.post('/signup', (req, res) => {
    res.send("signup");
})

userRouter.get('/purchases', (req, res) => {
    res.send("courses");
})

module.exports = {
    userRouter
};