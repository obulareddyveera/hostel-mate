import jwt from 'jsonwebtoken';
import { addUniqueUserByGoogleId } from '../../../lib/prisma/services/user';

const AuthHandler = async (req, res) => {
    const body = req.body
    console.log('--== AuthHandler ', req.body);
    const {payload} = jwt.decode(body.token, { complete: true });
    const userEntity = await addUniqueUserByGoogleId(payload.id)
    res.status(200).send({ user: userEntity})
}

export default AuthHandler;