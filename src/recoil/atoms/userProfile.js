import { atom } from "recoil";

export const userProfile = atom({
  key: "userProfile",
  default: {
    toggleMenu: false,
    token: "",
    user: {
      displayName: "Welcome",
      photoUrl: "/images/man.png",
    }
  },
});