const { Router } = require('express');
const adminRouter = Router();
const { AdminModel } = require('../db');
const { z } = require('zod');

adminRouter.post('/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const adminSchema = z.object({
        username: z.string().min(3).max(30),
        email: z.email(),
        password: z.string().min(8).max(30)
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