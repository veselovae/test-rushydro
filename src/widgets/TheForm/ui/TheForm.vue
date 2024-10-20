<script setup lang="ts">
import { onMounted, computed } from "vue";

import TextInput from "@/entities/ui/TextInput.vue";
import TelInput from "@/entities/ui/TelInput.vue";

import { formTextFields, formTelFields } from "../lib/constants";
import { getSignature } from "../api/getSignature";

import { useForm } from "@/app/store/store.js";

const store = useForm();

onMounted(async () => {
  const signature = await getSignature();
  store.updateSignatureData(signature);
});

const signature = computed(() => {
  return new Proxy(store.signature, {
    set: (_target, prop, value) => {
      store.updateSignatureData({ [prop]: value });
      return true;
    },
  });
});
</script>

<template>
  <div class="form-wrapper">
    <TextInput
      v-for="item of formTextFields"
      :key="item.label"
      :type="item.type"
      v-model="signature[item.model]"
    >
      {{ item.label }}
    </TextInput>

    <TelInput
      v-for="item of formTelFields"
      :key="item.label"
      :type="item.type"
      v-model="signature[item.model]"
      :maskInp="item.mask"
    >
      {{ item.label }}
    </TelInput>
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
