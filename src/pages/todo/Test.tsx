import { atom } from "recoil";

export const booleanState = atom<boolean>({
  key: "boolean",
  default: false,
});
