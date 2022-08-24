import { selector } from "recoil";

import { userProfile } from "../atoms/userProfile";
export const userProfileSelector = selector({
  key: "userProfileSelector",
  get: ({ get }) => {
    return get(userProfile);
  },

});
