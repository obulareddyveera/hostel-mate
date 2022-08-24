import prisma from "./../index";
import { getUserByGoogleId } from "./user";

export const getHostel = async () => {
    return await prisma.hostel.findMany();
}

export const getStaffByGoogleId = async (args) => {
    const {userGoogleId} = args;
    const user = await getUserByGoogleId(userGoogleId)
    console.log('--== getStaffByGoogleId ', user);
    const staffDetails  = await prisma.staff.findFirst({
        where : {
            userId: user.id
        }
    })
    return staffDetails ? staffDetails : {}
}
