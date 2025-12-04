const { Router } = require('express');
const adminRouter = Router();
const { AdminModel } = require('../db');
const { z } = require('zod');

adminRouter.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const adminSchema = z.object({
        username: z.string().min(3),
        email: z.email(),
        password: z.string().min(6)
    })
    res.json({
        message: "signup"
    });
})

adminRouter.post('/signin', (req, res) => {
    res.json({
        message: "signin"
    });
})

adminRouter.post('/course', (req, res) => {
    res.json({
        message: "course"
    });
})

adminRouter.get('/course/bulk', (req, res) => {
    res.json({
        message: "bulk course"
    });
})

adminRouter.put('/course', (req, res) => {
    res.json({
        message: "Edit Courses"
    });
})

module.exports = {
    adminRouter
}