const express = require("express");

const app = express();
let requestCount = 0;
function requestIncreaser(req, res, next) {
    requestCount++;
    // res.json({
    //     count: requestCount
    // })
    // res.send(`Request count is ${requestCount}`)
    console.log(`Request count is ${requestCount}`)
    next();
}

// app.use(requestIncreaser);

app.get("/sum", requestIncreaser, function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: parseInt(a + b)
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
});