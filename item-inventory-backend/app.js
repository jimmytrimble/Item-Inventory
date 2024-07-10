const express = require('express')
const app = express();
const cors = require('cors');
const port = 8081;
const knex = require('knex')(require('./knexfile.js')['development']);
const bodyParser = require('body-parser');

app.use(cors(), express.json());
app.use(bodyParser.json());


// all GET requests

app.get('/users', async (req, res) => {
  try {
    const users = await db('users').select('*');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await knex('users').where({ username, password }).first();
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out successfully' });
});

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });


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



//All PATCH requests

app.patch('/user/update/:id', (req, res) => {
  const { name, username, password } = req.body
  const { id } = req.params
  let updates = {};
  if (name) updates.name = name
  if (username) updates.username = username
  if (password) updates.password = password
  knex('users')
    .where('id', id)
    .update(updates)
    .then(response => {
      res.status(201).send('Updated successfully')
    })
})



app.patch('/user/item/update/:id', (req, res) => {
  const { item_name, price, image, details, item_id } = req.body
  const {id} = req.params
  let updates = {};
  if(item_name) updates.item_name = item_name
  if(price) updates.price = price
  if(image) updates.image = image
  if(details) updates.details = details
  if(item_id) updates.item_id = item_id
  knex('items')
  .where('id', id)
  .update(updates)
  .then(response => {
    res.status(201).send('Updated successfully.')
  })
})

//ALL DELETE REQUESTS

app.delete('/user/remove/item/:id', (req, res) => {
  const { id } = req.params
  knex('items')
    .where('id', id)
    .del()
    .then(deleted => {
      if(deleted) res.status(202).send(`Item ${id} deleted.`)
      else res.status(404).send(`Item ${id} not found`)
    })
})



app.delete('/user/remove/:username', (req, res) => {
  const { username } = req.params;
  knex('users')
    .where('username', username)
    .del()
    .then(deleted => {
      if (deleted) res.status(202).send(`User ${username} deleted.`)
      else res.status(404).send(`User ${username} not found.`)
    })
})


app.listen(port, (req, res) => console.log(`Express server is listening on ${port}.`))