import { defineStore } from "pinia";

export const useForm = defineStore("form", {
  state: () => ({ counter: 0 }),
  getters: {
    getCounter: (state) => {
      return state.counter;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
