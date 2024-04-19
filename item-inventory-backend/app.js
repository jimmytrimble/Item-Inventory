const express = require('express')
const app = express();
const cors = require('cors');
const port = 8081;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors(), express.json());



// all GET requests

app.get('/', (req, res) => {
  res.send('testing');
})

app.get('/users', (req, res) => {
  knex('users')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).send(err))
})


app.get('/items', (req, res) => {
  knex('items')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).send(err))
})


app.get('/user/items/:id', (req, res) => {
  const { id } = req.params;
  knex('items')
    .select('users.name', 'items.item_name', 'items.price', 'items.image', 'items.details')
    .join('users', 'items.item_id', '=', 'users.id')
    .where('item_id', id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).send(err))

})



// all POST requests

app.post('/add/user', (req, res) => {
  const { name, username, password } = req.body;
  knex('users')
    .insert({ name, username, password })
    .then(response => {
      res.status(201).json({ name, username, password })
    })
    .catch(err => {
      res.status(500).send(`Unable to create user ${name}.`)
    });
})

app.post('/item/new', (req, res) => {
  const { item_name, price, image, details, item_id } = req.body
  knex('items')
  .insert({ item_name, price, image, details, item_id })
  .then(response => {
    res.status(201).json({ item_name, price, image, details })
  })
  .catch(err => {
    res.status(500).send(`Unable to add item ${item_name} to your inventory.`)
  })
})

app.listen(port, (req, res) => console.log(`Express server is listening on ${port}.`))