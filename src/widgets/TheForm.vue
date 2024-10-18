<script setup>
import InputTextItem from "../entities/InputTextItem.vue";
import InputTelItem from "../entities/InputTelItem.vue";

import { ref, onMounted } from "vue";

const formTextFields = [
  { label: "Фамилия Имя", type: "text", model: "name" },
  { label: "Должность", type: "text", model: "position" },
  { label: "Подразделение", type: "text", model: "department" },
  { label: "Местоположение", type: "text", model: "address" },
];

const formTelFields = [
  {
    label: "Рабочий телефон",
    type: "tel",
    model: "office_phone_number",
    mask: "+7(###) ###-##-## (###)####",
  },
  {
    label: "Мобильный телефон",
    type: "tel",
    model: "personal_phone_number",
    mask: "+7(###) ###-##-##",
  },
];

let modelVal = ref({
  name: "",
  position: "",
  department: "",
  office_phone_number: "",
  personal_phone_number: "",
  address: "",
});

// watch(modelVal, (newModelVal) => console.log(modelVal));
onMounted(async () => {
  const data = await fetch("http://127.0.0.1:8000/").then((res) => res.json());
  console.log(modelVal);

  modelVal.value = data;
  console.log(data);
});
</script>

<template>
  <div class="form-wrapper">
    <InputTextItem
      v-for="item of formTextFields.slice(0, formTextFields.length - 1)"
      :key="item.label"
      :type="item.type"
      :modelValue="modelVal[item.model]"
      @update:modelValue="(newValue) => (modelVal[item.model] = newValue)"
    >
      {{ item.label }}
    </InputTextItem>

    <InputTelItem
      v-for="item of formTelFields"
      :key="item.label"
      :type="item.type"
      :modelValue="modelVal[item.model]"
      @update:modelValue="(newValue) => (modelVal[item.model] = newValue)"
      :maskInp="item.mask"
    >
      {{ item.label }}
    </InputTelItem>

    <InputTextItem
      v-for="item of formTextFields.slice(-1)"
      :key="item.label"
      :type="item.type"
      :modelValue="modelVal[item.model]"
      @update:modelValue="(newValue) => (modelVal[item.model] = newValue)"
    >
      {{ item.label }}
    </InputTextItem>
  </div>
</template>
