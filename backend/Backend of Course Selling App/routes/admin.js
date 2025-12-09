const { Router } = require('express');
const adminRouter = Router();
const { AdminModel, CourseModel } = require('../db');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { adminMiddleware } = require('../middlewares/admin');

adminRouter.post('/signup', async (req, res) => {
    const adminSchema = z.object({
        username: z.string().min(3).max(30),
        email: z.email(),
        password: z.string().min(8).max(30),
        role: z.enum(["user", "admin"])
    })

    const parsedDataWithSuccess = adminSchema.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        return res.status(400).json({
            message: "Invalid Request Body",
            error: parsedDataWithSuccess.error
        })
    }

    const { username, email, password, role } = parsedDataWithSuccess.data;

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
        await AdminModel.create({
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

adminRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required"
        });
    }
    try {
        const admin = await AdminModel.findOne({
            email
        });
        if (!admin) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }
        const passwordMatched = await bcrypt.compare(password, admin.password);

        if (passwordMatched) {
            const token = jwt.sign({
                id: admin._id
            }, process.env.JWT_ADMIN_SECRET);

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

adminRouter.post('/course', adminMiddleware, async (req, res) => {
    const adminId = req.id;

    const { title, description, price, imageUrl } = req.body;

    try {
        const course = await CourseModel.create({
            title,
            description,
            price,
            imageUrl,
            creatorId: adminId
        });
        res.json({
            message: "Course created successfully",
            course: course._id
        })
    } catch (error) {
        console.error("Error in course creation:", error);
        res.status(500).json({
            message: "Course creation failed",
            error: error.message
        });
    }
})

adminRouter.get('/course/bulk', adminMiddleware, (req, res) => {
    const adminId = req.id;
    try {
        const courses = CourseModel.find({
            creatorId: adminId
        })
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

adminRouter.put('/course', adminMiddleware, async (req, res) => {
    const adminId = req.id;

    const { title, description, price, imageUrl } = req.body;
    try {
        const course = await CourseModel.updateOne({
            creatorId: adminId
        }, {
            title,
            description,
            price,
            imageUrl
        })
        res.json({
            message: "Course updated successfully",
            courseId: course._id
        })
    } catch (error) {
        console.error("Error in course update:", error);
        res.status(500).json({
            message: "Course update failed",
            error: error.message
        });
    }
})

module.exports = {
    adminRouter
}