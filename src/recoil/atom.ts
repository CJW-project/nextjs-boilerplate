import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist(); // default: localstorage

// sessionStorage 사용 시
// const { persistAtom } = recoilPersist({
//   key: 'sessionStorage',
//   storage: sessionStorage,
// })

export const countState = atom({
  key: "countState",
  default: 0,
  effects_UNSTABLE: [persistAtom]
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
  effects_UNSTABLE: [persistAtom]
});

export const textState = atom({
  key: "textState",
  default: { status: "" },
  effects_UNSTABLE: [persistAtom]
});