import prisma from "./../index";

export const getUserByGoogleId = async (id) => {
    return await prisma.users.findFirst({
        where: {
            googleId: id
        }
    });
}

export const getUsers = async () => {
    return await prisma.users.findMany();
}

export const addUser = async (profile) => {
    const user = await prisma.Users.create({
        data: {
            displayName: profile.displayName,
            familyName: profile.name.familyName,
            givenName: profile.name.givenName,
            email: profile.emails[0].value,
            photoUrl: profile.photos[0].value,
            googleId: profile.id
        }
    })
    console.log('---== New User Created at planetScaleDB ', user);

    return user;
}

export const isUserExistsByGoogldId = async (id) => {

    const isUserExists = await prisma.Users.findFirst({
        where : {
            googleId: id,
        }
    })
    console.log(' --== isUserExistsByGoogldId ', isUserExists);

    return isUserExists;
}

export const isOrgUserExistsByUserId = async (id) => {

    const isOrgUserExists = await prisma.OrgUsers.findFirst({
        where : {
            userId: id,
        }
    })
    console.log(' --== isOrgUserExistsByUserId ', isOrgUserExists);

    return isOrgUserExists;
}
