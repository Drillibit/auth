const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./utils/passport');

// const keys = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://kvk-admin:293344asd@ds129926.mlab.com:29926/kvk-union')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ['ewfwrferw']
    })
);
app.use(passport.initialize());
app.use(passport.session());


// Routes
require('./routes/auth')(app);
require('./routes/materials')(app);
require('./routes/branches')(app);

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