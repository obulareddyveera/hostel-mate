import { atom } from "recoil";

export const breadcrumbs = atom({
  key: "breadcrumbs",
  default: {
    active: '',
    path: []
  },
});