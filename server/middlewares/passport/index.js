const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const jwt = require('jsonwebtoken');
require("dotenv").config();

const GOOGLE_CLIENT_ID = "533868205189-lqhbjlveqok4rqg6c5tlpu5o2f1s1iph.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_REDIRECTION_URL = "http://localhost:3000/auth/google/callback";
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_REDIRECTION_URL
},
    function (accessToken, refreshToken, profile, done) {
        const token = jwt.sign({ id: profile.id, }, process.env.JWTSecretKey, { expiresIn: '14d' });
        const user = {
            email: profile.emails,
            username: profile.username,
            id: profile.id,
            profileUrl: profile.profileUrl,
            token
        };
        return done(null, user);
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
module.exports = passport;