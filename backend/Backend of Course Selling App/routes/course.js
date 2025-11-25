// Course routes
const { Router } = require("express");
const courseRouter = Router();

courseRouter.post('/purchase', (req, res) => {
    res.send("courses");
})

courseRouter.get('/preview', (req, res) => {
    res.send("courses");
})

module.exports = {
    courseRouter
};
