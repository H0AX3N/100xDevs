// User routes
const express = require("express");
const { Router } = express;
const app = express();
const userRouter = Router();

app.use(express.json());

userRouter.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        res.json({
            message: "signin"
        });
    } catch (error) {

    }
})

userRouter.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
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