const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let todos = [];
let nextId = 1;

app.post('/todos', (req, res) => {
    const todo = {
        id: nextId++,
        title: req.body.title
    };
    todos.push(todo);
    res.status(201).json(todo);
});

app.get('/todos', (req, res) => {
    res.json(todos)
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if(index === -1) {
        return res.status(404).json({error: "Todo not found"})
    }
    todos.splice(index, 1);
    return res.json(204).send();
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/todos');
})