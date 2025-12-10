// Course routes
const { Router } = require("express");
const { PurchaseModel, CourseModel } = require("../db");
const { userMiddleware } = require("../middlewares/user");
const courseRouter = Router();

courseRouter.post('/purchase', userMiddleware, async (req, res) => {
    const userId = req.id;
    const { courseId } = req.body;

    try {
        const alreadyPurchased = await PurchaseModel.findOne({
            userId,
            courseId
        });
        if (alreadyPurchased) {
            return res.status(400).json({
                message: "You have already purchased this course"
            })
        }

        await PurchaseModel.create({
            userId,
            courseId
        })
        res.json({
            message: "You have successfully bought the course"
        })
    } catch (error) {
        console.error("Error in purchase:", error);
        res.status(500).json({
            message: "Purchase failed",
            error: error.message
        })
    }
})

courseRouter.get('/preview', async (req, res) => {
    try {
        const courses = await CourseModel.find();
        res.json({
            message: "Courses fetched successfully",
            courses
        })
    } catch (error) {
        console.error("Error in course fetching:", error);
        res.status(500).json({
            message: "Course fetching failed",
            error: error.message
        });
    }
})

module.exports = {
    courseRouter
};
