// selectors/name.js

import { selector } from "recoil";

import { breadcrumbs } from "../atoms/breadcrumbs";

export const breadcrumbsSelector = selector({
  key: "breadcrumbSelector",
  get: ({ get }) => {
    return get(breadcrumbs);
  },

});
