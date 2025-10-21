const express = require('express');
const app = express();

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age
    if(age >= 12) {
        next();
    } else {
        res.json({
            message: "Sorry you are not allowed to ride"
        })
    }
}

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
    res.json({
        message: "You are allowed to ride"
    })
});

app.use(isOldEnoughMiddleware); //* If a certain middleware needs to go on every route, then we can do it like this instead of declaring it in every routes like i did for /ride1 route. This way we don't have to declare this middleware in every route.
//* The order also matters. This would not work if /ride1 route was above this

app.get('/ride2', (req, res) => {
    res.json({
        message: "You are allowed to ride"
    })
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})