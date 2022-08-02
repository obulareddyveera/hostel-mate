import nextConnect from "next-connect";
import jwt from "jsonwebtoken";
import { serialize } from 'cookie';

import { 
        addUser, 
        isUserExistsByGoogldId, 
        isOrgUserExistsByUserId 
    } from "../../../../lib/prisma/services/user";
import passport from "../../../../lib/passport";

export default nextConnect().get(
    passport.authenticate("google"),
    async (req, res) => {
        let redirectUrl = "/protected/board";
        let orgUsersEntity;
        try {
            console.log('--==:: GoogleId ', req.user.id);
            let userEntity = await isUserExistsByGoogldId(req.user.id);
            if (userEntity) {
                orgUsersEntity = await isOrgUserExistsByUserId(userEntity.id);
            } else {
                userEntity = await addUser(req.user);
            }
            
            if (userEntity && orgUsersEntity) {
                redirectUrl = "/protected/board";
            } else {
                redirectUrl = "/protected/org";
            }
        } catch (e) {
            console.log('--== isUserExists :: catch ', e);
            redirectUrl = "/error";
        }
        
        res.setHeader('Set-Cookie', serialize('authToken', jwt.sign({ id: req.user.id }, process.env.JWTSecretKey), { path: "/" }));
        res.redirect(redirectUrl);
    }
);