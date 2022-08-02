import nextConnect from "next-connect";
import jwt from "jsonwebtoken";

import passport from "../../../../lib/passport";

export default nextConnect().get(
    passport.authenticate("google"),
    async (req, res) => {
        try {
            const tokenValue = jwt.sign({ id: req.user.id }, process.env.JWTSecretKey);
            console.log('---== 1 -- passport.authenticate::callback :: token ', req.user.id, tokenValue);
            res.redirect(307, `/protected/${tokenValue}`)
        } catch(e) {
            console.log('---== * -- passport.authenticate::callback :: error ', e);
            res.redirect(500, `/error`)
        }
    }
);