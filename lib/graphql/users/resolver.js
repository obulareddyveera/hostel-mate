import { getUsers } from "../../prisma/services/user";

export const usersResolver = {
    users: (_, args, context, info) => {
        return getUsers();
    }
}