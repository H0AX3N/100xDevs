const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "fyt67hjiopijhuwfvu";

app.use(express.json());

const users = [];

app.post('/sign-up', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username: username,
        password: password
    })
    console.log(users)

    res.json({
        message: "You have signed up successfully"
    })
});


app.post('/sign-in', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; 

    const foundUser = users.find(user => user.username === username && user.password === password);

    if(foundUser) {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        res.json({
            message: "You have signed in successfully",
            token: token
        })
    } else {
        res.json({
            message: "Invalid username or password"
        })
    }
    console.log(users)
});

app.get('/me', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        // Send a response to the client that the token is missing
        return res.json({
            message: "Token is missing!",
        });
    }

    const userDetails = jwt.verify(token, JWT_SECRET);

    const user = users.find(user => user.username === userDetails.username);
    if(user) {
        res.send({
            username: user.username,
            password: user.password
        })
    } else {
        res.json({
            message: "Invalid token"
        })
    }
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})