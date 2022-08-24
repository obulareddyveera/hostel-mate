import { getHostel, getStaffByGoogleId } from "../../prisma/services/hostel";

export const hostelResolver = {
    hostel: (_, args, context, info) => {
        return getHostel();
    },
    staffByGoogleId: (_, args, context, info) => {
        console.log('--== staffByGoogleId ', args);
        return getStaffByGoogleId(args);
    },
}