// User routes
const express = require("express");
const { Router } = express;
const { UserModel } = require("../db");
const userRouter = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({
            email,
            password
        })
    } catch (error) {

    }
})

userRouter.post('/signup', async (req, res) => {
    const userSchema = z.object({
        username: z.string().min(3).max(30),
        email: z.email(),
        password: z.string().min(8).max(30),
        role: z.enum(["user", "admin"])
    })

    const parsedDataWithSuccess = userSchema.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        return res.status(400).json({
            message: "Invalid Request Body",
            error: parsedDataWithSuccess.error
        })
    }

    const { username, email, password, role } = parsedDataWithSuccess.data;

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        await UserModel.create({
            username,
            email,
            password: hashedPassword,
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