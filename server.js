const express = require('express');
const app = express();
app.use(express.json());

let journalEntries = [];
let todos = [];
let events = [];

app.get('/', (req, res) => {
  res.send('Trait 1.0 API');
});

// Journal endpoints
app.get('/journals', (req, res) => {
  res.json(journalEntries);
});

app.post('/journals', (req, res) => {
  const entry = { id: Date.now(), text: req.body.text, date: new Date() };
  journalEntries.push(entry);
  res.status(201).json(entry);
});

// To-do endpoints
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// Calendar events
app.get('/events', (req, res) => {
  res.json(events);
});

app.post('/events', (req, res) => {
  const event = { id: Date.now(), title: req.body.title, time: req.body.time };
  events.push(event);
  res.status(201).json(event);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
