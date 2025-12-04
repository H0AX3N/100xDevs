// User routes
const express = require("express");
const { Router } = express;
const { UserModel } = require("../db");
const userRouter = Router();

userRouter.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        res.json({
            message: "signin"
        });
    } catch (error) {

    }
})

userRouter.post('/signup', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        await UserModel.create({
            username,
            email,
            password,
            role
        })
        res.json({
            message: "signed up successfully"
        });
    } catch (error) {
        console.error("Signup failed:", error);
        res.status(500).json({
            message: "signup failed",
            error: error.message
        });
    }
})

userRouter.get('/purchases', (req, res) => {
    res.json({
        message: "courses"
    });
})

module.exports = {
    userRouter
};