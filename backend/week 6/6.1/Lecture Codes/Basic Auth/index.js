const express = require('express');
const app = express();

app.use(express.json());

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token = generateToken();
        
        //* Add the generated token to the user object
        foundUser.token = token;

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
    const user = users.find(user => user.token === token);
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