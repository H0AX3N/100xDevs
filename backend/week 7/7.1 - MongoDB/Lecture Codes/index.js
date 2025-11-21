const express = require('express');
const { UserModel, TodoModel } = require('./db')
const app = express();
const jwt = require('jsonwebtoken');
const { mongoose } = require('mongoose');

const SECRET_KEY = 'vhyf72gt4v4bu3r8hf7gyu';

mongoose.connect("mongodb+srv://Sandipan:PnZbjl0v21SOrhxO@cluster0.rno05ea.mongodb.net/todo-demo")
app.use(express.json());

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    await UserModel.create({
        email: email,
        password: password,
        username: username
    });

    res.json({
        message: "You have signed up successfully"
    })
})

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, SECRET_KEY);

        res.json({
            token
        });
    } else {
        res.status(403).json({
            message: "Wrong Credentials"
        });
    }
})

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const todo = req.body.todo;

    await TodoModel.create({
        todo: todo,
        userId: userId
    })

    res.json({
        message: "Todo added successfully",
        userId: userId
    })
})

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        message: "Todos fetched successfully",
        todos
    })
})

function auth(req, res, next) {
    const token = req.headers.token;

    try {
        const decodedData = jwt.verify(token, SECRET_KEY);

        if (decodedData) {
            const userId = decodedData.id;
            req.userId = userId;
            next();
        }
    } catch (e) {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }
}

app.listen(3000, () => {
    console.log("http://localhost:3000");
})