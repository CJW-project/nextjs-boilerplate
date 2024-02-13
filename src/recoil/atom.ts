import { atom } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    { contents: "content1", status: "DONE" },
    { contents: "content2", status: "DOING" },
    { contents: "content3", status: "DONE" },
    { contents: "content4", status: "HOLD" },
    { contents: "content5", status: "DOING" },
  ],
});

export const textState = atom({
  key: "textState",
  default: { status: "" },
});