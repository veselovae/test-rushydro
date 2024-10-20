<script setup>
import { useForm } from "@/app/store/store.js";

const store = useForm();

import { signatureStyles } from "./lib/constants";
</script>

<template>
  <div class="signature-wrapper">
    <div class="signature-top" :style="signatureStyles.signatureTop">
      <i>С уважением</i>
      <i
        v-if="store.getSignature.name"
        class="signature-name"
        :style="signatureStyles.signatureName"
        >{{ store.getSignature.name }}</i
      >
      <i v-if="store.getSignature.position">{{
        store.getSignature.position
      }}</i>
      <i v-if="store.getSignature.department">{{
        store.getSignature.department
      }}</i>
    </div>

    <div
      class="signature-phone"
      v-if="store.getSignature.office_phone_number"
      :style="signatureStyles.signaturePhone"
    >
      <i>раб. тел.:</i>
      <i>{{ store.getSignature.office_phone_number }}</i>
    </div>
    <div
      class="signature-phone"
      v-if="store.getSignature.personal_phone_number"
      :style="signatureStyles.signaturePhone"
    >
      <i>моб. тел.:</i>
      <i>{{ store.getSignature.personal_phone_number }}</i>
    </div>

    <i v-if="store.getSignature.address" :style="signatureStyles.address">{{
      store.getSignature.address
    }}</i>

    <a
      class="logo"
      href="https://www.google.com/"
      target="_blank"
      :style="signatureStyles.logo"
    >
      <img
        src="@/shared/assets/logo.png"
        alt="logo"
        class="logo-img"
        :style="signatureStyles.logoImg"
      />
    </a>
  </div>
</template>

<style scoped>
.signature-wrapper {
  width: 500px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  color: #3e6e9b;
}
</style>
