const express = require('express');
const path = require('path');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'bgfydeuwe3irfg98ryeghdjufi87ey'

app.use(express.json());
app.use(express.static('public'));

const users = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

function auth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.json({
            message: "You are not authenticated"
        })
    }

    try {
        const decodedUser = jwt.verify(token, JWT_SECRET);
        req.username = decodedUser.username;
        next();
    } catch (error) {
        res.json({
            message: "You are not authenticated"
        })
    }
}

app.post('/sign-up', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username);

    if (user) {
        return res.json({
            message: 'User already exists'
        })
    }

    users.push({
        username: username,
        password: password
    })

    return res.json({
        message: 'You have signed-up successfully'
    })
});

app.post('/sign-in', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username == username);

    if (!foundUser) {
        return res.json({
            message: "User not found"
        });
    } else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        return res.json({
            message: "You have signed in successfully",
            token: token
        })
    }
});

app.get('/me', auth, (req, res) => {
    const currentUser = req.username;
    res.json({
        message: "You have signed in successfully",
        username: currentUser
    })
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});