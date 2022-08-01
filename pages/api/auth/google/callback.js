import nextConnect from "next-connect";
import jwt from "jsonwebtoken";
import { serialize } from 'cookie';

import passport from "../../../../lib/passport";

export default nextConnect().get(
    passport.authenticate("google"),
    (req, res) => {
        console.log('--== authenticate ', req.user);
        res.setHeader('Set-Cookie', serialize('authToken', jwt.sign({ id: req.user.id }, process.env.JWTSecretKey), { path: '/protected/auth' }));
        res.redirect("/protected/auth");
    }
);