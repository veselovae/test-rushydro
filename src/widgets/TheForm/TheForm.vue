<script setup>
import InputTextItem from "@/entities/InputTextItem.vue";
import InputTelItem from "@/entities/InputTelItem.vue";
import ButtonCopy from "@/shared/ui/ButtonCopy.vue";

import { onMounted, computed } from "vue";

import { formTextFields, formTelFields } from "./contants";
import { getRequst } from "./request";

// let modelVal = ref({
//   name: "",
//   position: "",
//   department: "",
//   office_phone_number: "",
//   personal_phone_number: "",
//   address: "",
// });

onMounted(() => {
  getRequst(store.updateSignatureData);
  // store.updateSignatureData(modelVal);
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
    <!-- <InputTextItem
      v-for="item of formTextFields.slice(0, formTextFields.length - 1)"
      :key="item.label"
      :type="item.type"
      :modelValue="modelVal[item.model]"
      @update:modelValue="(newValue) => (modelVal[item.model] = newValue)"
    >
      {{ item.label }}
    </InputTextItem> -->

    <InputTextItem
      v-for="item of formTextFields.slice(0, formTextFields.length - 1)"
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

    <InputTextItem
      v-for="item of formTextFields.slice(-1)"
      :key="item.label"
      :type="item.type"
      v-model="signature[item.model]"
    >
      {{ item.label }}
    </InputTextItem>

    <!-- {{ store.getSignature }} -->
    <div class="buttons">
      <ButtonCopy>Копировать текст</ButtonCopy>
      <ButtonCopy>Копировать HTML</ButtonCopy>
    </div>
  </div>
</template>

<style scoped>
.form-wrapper {
  width: 100%;
}

.buttons {
  display: flex;
  gap: 30px;
}
</style>
