const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    },
});

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

app.get('/', (req, res) => {
    res.send(db.users);
});

app.post('/signin', signin.handleSignin(db, bcrypt));

app.get('/profile/:id', profile.handleProfileGet(db));

app.post('/register', register.handleRegister(db, bcrypt));

app.put('/image', image.handleImage(db));

app.post('/imageurl', image.handleApiCall);

app.listen(process.env.PORT || 8000, () => {
    console.log(`App is running on port ${process.env.PORT || 8000}`);
});

// / --> res = this is working
// /signin --> POST = success/fail
// /register --> POST = user
// /profile/:userId --> GET = user
// /image --> PUT = user
