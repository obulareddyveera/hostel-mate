import { findOrgUserByGoogleId, getUsers } from "../../prisma/services/user";

export const usersResolver = {
    Query: {
        users: (_, args, context, info) => {
            return getUsers();
        },
        orgUserByGoogleId: (_, args, context, info) => {
            console.log('--=== userByGoogleId ', args);
            return findOrgUserByGoogleId(args.googleId);
        },
    },
}
