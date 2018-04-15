const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: 'keyboaedsacasxscie'
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

const PORT = process.env.PORT || 5000;
console.log(`App runnig at port ${PORT}`);
app.listen(PORT);