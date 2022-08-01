import { Profile, Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

const saveUser = (user) => {
    return new Promise((resolve, reject) => {
        resolve("Successful");
    });
};

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REDIRECTION_URL,
        },
        async (_accessToken, _refreshToken, profile, cb) => {
            try {
                await saveUser(profile);
                return cb(null, profile);
            } catch (e) {
                throw new Error(e);
            }
        }
    )
);


passport.serializeUser((user, cb) => {
    process.nextTick(function () {
        return cb(null, user);
    });
});

passport.deserializeUser(function (
    user,
    cb
) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

export default passport;