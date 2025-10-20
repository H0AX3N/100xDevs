const express = require("express");
const app = express();
app.use(express.json());

let users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
            {
                healthy: true,
            },
        ],
    },
];

app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    let numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    let unhealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            healthyKidneys += 1;
        } else {
            unhealthyKidneys += 1;
        }
    }
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidneys,
    });
});

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    res.json({
        msg: "Done!!",
    });
});

app.put("/", (req, res) => { 
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
});

app.delete("/", (req, res) => { 
    users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy)
    res.json({})
});

app.listen(3001, () => {
    console.log("server is running on http://localhost:3001");
});
