<script setup>
import InputTextItem from "@/entities/InputTextItem.vue";
import InputTelItem from "@/entities/InputTelItem.vue";

import { onMounted, computed } from "vue";

import { formTextFields, formTelFields } from "./lib/constants";
import { getRequst } from "./lib/request";

onMounted(() => {
  getRequst(store.updateSignatureData);
});

import { useForm } from "../../app/store/store.js";
const store = useForm();

const signature = computed(() => {
  return new Proxy(store.getSignature, {
    set: (target, prop, value) => {
      store.updateSignatureData({ [prop]: value });
      return true;
    },
  });
});
</script>

<template>
  <div class="form-wrapper">
    <InputTextItem
      v-for="item of formTextFields"
      :key="item.label"
      :type="item.type"
      v-model="signature[item.model]"
    >
      {{ item.label }}
    </InputTextItem>

    <InputTelItem
      v-for="item of formTelFields"
      :key="item.label"
      :type="item.type"
      v-model="signature[item.model]"
      :maskInp="item.mask"
    >
      {{ item.label }}
    </InputTelItem>
  </div>
</template>

<style>
.form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-item[type="text"]:nth-child(4) {
  order: 6;
}
</style>
