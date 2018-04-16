const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('../models/user');

const User = mongoose.model('users');


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
  passport.use(new LocalStrategy(
      (username, password, done) => {
          console.log(`username ${username} and ${password}`);
          User.findOne({ 
              username: username 
            }).then(user => {
                console.log(user);
                if (!user) {
                    console.log('NO!');
                    return done(null, false);
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch){
                        console.log(`here is the user ${user}`)
                        return done(null, user);
                    } else {
                        console.log('wrin')
                        return done(null, false);
                    }
                })
            });
      }
  ));