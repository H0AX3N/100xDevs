// Course routes
const { Router } = require("express");
const { CourseModel } = require("../db");
const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.json({
        message: "courses"
    });
})

courseRouter.get('/preview', (req, res) => {
    res.json({
        message: "courses"
    });
})

module.exports = {
    courseRouter
};
