// selectors/name.js

import { selector } from "recoil";

import { userProfile } from "../atoms/userProfile";

export const userProfileSelector = selector({
  key: "userProfileSelector", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    return get(userProfile);
  },

});
