const express = require('express');
const app = express();

let totalRequests = 0;

function countRequests(req, res, next) {
    totalRequests++;
    next();
}

app.use(countRequests);


app.get('/', (req, res) => {
    res.json({
        totalRequests
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
});