const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser')
const passport = require('./middlewares/passport')

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({ extended: true }))

        server.use(session({
            resave: false,
            saveUninitialized: true,
            secret: 'SECRET'
        }));
        server.use(passport.initialize());
        server.use(passport.session());

        server.get('/v1/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));
        server.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error' }), (req, res) => {
            // req.headers['authToken'] = `Bearer ${req.user.token}`;
            // req.headers['user'] = JSON.stringify(req.user);
            res.cookie('authToken', req.user.token);
            res.redirect('/protected/auth');
        });

        server.get('/error', (req, res) => res.send("error logging in"));

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        process.exit(1)
    })