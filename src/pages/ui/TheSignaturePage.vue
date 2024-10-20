<script setup lang="ts">
import { ref } from "vue";

import TheForm from "@/widgets/TheForm/ui/TheForm.vue";
import TheSignature from "@/widgets/TheSignature/ui/TheSignature.vue";
import CopyButton from "@/shared/ui/CopyButton.vue";

import { copyText, copyHTML } from "@/features/functions";
import { useForm } from "@/app/store/store.js";

const store = useForm();

const signatureElemRef = ref();

const copyHTMLcode = () => {
  copyHTML(signatureElemRef.value.$el.innerHTML);
};
</script>

<template>
  <div class="page-wrapper">
    <div class="form-and-btns">
      <TheForm />
      <div class="buttons">
        <CopyButton @click="copyText(store.signatureData)"
          >Скопировать текст</CopyButton
        >
        <CopyButton @click="copyHTMLcode">Скопировать код</CopyButton>
      </div>
    </div>
    <TheSignature ref="signatureElemRef" />
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
