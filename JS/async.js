const fs = require('fs');
let aText = fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(data);
});
let bText = fs.readFile('b.txt', 'utf-8', (err, data) => {
    console.log(data);
});