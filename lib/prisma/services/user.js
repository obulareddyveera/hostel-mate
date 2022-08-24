import prisma from "./../index";

export const getUsers = async () => {
    return await prisma.users.findMany();
}

export const getUserByGoogleId = async (googleId) => {
    return await prisma.Users.findFirst({
        where : {
            googleId: googleId,
        }
    })
}

export const addUniqueUserByGoogleId = async (profile) => {
    let userEntity = await prisma.Users.findFirst({
        where : {
            googleId: profile.id,
        }
    })
    if (!userEntity) {
        userEntity = await prisma.Users.create({
            data: {
                displayName: profile.displayName,
                familyName: profile.name.familyName,
                givenName: profile.name.givenName,
                email: profile.emails[0].value,
                photoUrl: profile.photos[0].value,
                googleId: profile.id
            }
        })
    }
    return userEntity;
}