import { textState, todoListState } from "@/recoil/atom";
import { selector } from "recoil";

export const textTodoListState = selector({
  key: "textTodoListState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(textState);
    return todoList.filter((item) => {
      if (filter.status && filter.status !== item.status) {
        return false;
      }
      return true;
    });
  },
});