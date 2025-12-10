// User routes
const express = require("express");
const { Router } = express;
const { UserModel, PurchaseModel } = require("../db");
const userRouter = Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userMiddleware } = require("../middlewares/user");

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required"
        });
    }
    try {
        const user = await UserModel.findOne({
            email
        });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }
        const passwordMatched = await bcrypt.compare(password, user.password);

        if (passwordMatched) {
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_USER_SECRET);

            // Do cookie logic if using cookie based authentication
            console.log("Sending response");
            res.json({
                message: "Signin Success",
                token
            })
        } else {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }
    } catch (error) {
        console.error("Error in signin:", error);
        res.status(403).json({
            message: "SignIn Failed",
            error: error.message
        })
    }
})

userRouter.post('/signup', async (req, res) => {
    const userSchema = z.object({
        username: z.string().min(3).max(30),
        email: z.email(),
        password: z.string().max(30),
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

userRouter.get('/purchases', userMiddleware, async (req, res) => {
    const userId = req.id;
    try {
        const purchases = await PurchaseModel.find({
            userId
        })
        res.json({
            message: "Purchases Fetched Successfully",
            purchases
        })
    } catch (error) {
        console.error("Error in purchase fetching:", error);
        res.status(500).json({
            message: "Purchase fetching failed",
            error: error.message
        })
    }
})

module.exports = {
    userRouter
};