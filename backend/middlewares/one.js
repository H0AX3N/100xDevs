const express = require('express');
const app = express();

app.get('/ride1', (req, res) => {
    res.json({
        message: "You have successfully ridden the ride"
    })
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
})