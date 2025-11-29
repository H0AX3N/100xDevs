const express = require("express");
const dotenv = require('dotenv').config()
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
const mongoose = require("mongoose");

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected ✨");

        app.listen(3000, () => {
            console.log("http://localhost:3000");
        });
    } catch (err) {
        console.error("DB connection failed ❌", err);
    }
}

main();