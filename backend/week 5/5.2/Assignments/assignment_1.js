
//* Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console


const express = require("express");
const app = express();

function reqInfo(req, res, next) {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("URL:", req.hostname);
    // console.log("Headers:", req.headers);
    console.log("IP:", req.ip || req.connection.remoteAddress);
    console.log("Timestamp:", new Date().toISOString());
    next();
}

app.use(reqInfo);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
})
