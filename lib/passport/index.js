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
            clientID: "533868205189-lqhbjlveqok4rqg6c5tlpu5o2f1s1iph.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "https://hostelmate.vercel.app/api/auth/google/callback",
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