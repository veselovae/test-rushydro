<script setup lang="ts">
import TheForm from "@/widgets/TheForm/TheForm.vue";
import TheSignature from "@/widgets/TheSignature/TheSignature.vue";
import ButtonCopy from "@/shared/ui/ButtonCopy.vue";

import { ref } from "vue";
import { getTextCopy, getHTMLCopy } from "@/features/functions";
import { useForm } from "@/app/store/store.js";
const store = useForm();

const refSignatureElem = ref();

const copyHTML = () => {
  getHTMLCopy(refSignatureElem.value.$el.innerHTML);
};
</script>

<template>
  <div class="page-wrapper">
    <div class="form-and-btns">
      <TheForm />
      <div class="buttons">
        <ButtonCopy @click="getTextCopy(store.signatureData)"
          >Скопировать текст</ButtonCopy
        >
        <ButtonCopy @click="copyHTML">Скопировать код</ButtonCopy>
      </div>
    </div>
    <TheSignature ref="refSignatureElem" />
  </div>
</template>

<style scoped>
.page-wrapper {
  padding: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 15px;
  align-items: self-start;
}

.form-and-btns {
  width: 100%;
}

.buttons {
  display: flex;
  gap: 30px;
}
</style>
