import { defineStore } from "pinia";

export const useForm = defineStore("form", {
  state: () => ({
    counter: 0,
    signatureData: {
      name: "",
      position: "",
      department: "",
      office_phone_number: "",
      personal_phone_number: "",
      address: "",
    },
  }),
  getters: {
    getCounter: (state) => {
      return state.counter;
    },
    getSignature: (state) => state.signatureData,
  },
  actions: {
    increment() {
      this.counter++;
    },
    updateSignatureData(newValue) {
      // console.log(this.signatureData, newValue);
      // this.signatureData = newValue;
      Object.assign(this.signatureData, newValue);
    },
  },
});
