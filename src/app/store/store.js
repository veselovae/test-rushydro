import { defineStore } from "pinia";

export const useForm = defineStore("form", {
  state: () => ({
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
    getSignature: (state) => state.signatureData,
  },
  actions: {
    updateSignatureData(newValue) {
      Object.assign(this.signatureData, newValue);
    },
  },
});
