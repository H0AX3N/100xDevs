const { Router } = require('express');
const adminRouter = Router();
const { AdminModel } = require('../db');

adminRouter.post('/signup', (req, res) => {
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