import { getUserByGoogleId, getUsers } from "../../prisma/services/user";

export const usersResolver = {
    Query: {
        userByGoogleId: (_, args, context, info) => {
            console.log('--=== userByGoogleId ', args);
            return getUserByGoogleId(args.id);
        },
        users: (_, args, context, info) => {
            return getUsers();
        }
    },
}
