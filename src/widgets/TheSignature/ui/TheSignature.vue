<script setup>
import { storeToRefs } from "pinia";
import { useForm } from "@/app/store/store.js";

import { signatureStyles } from "../lib/constants";

const store = useForm();
const { signature } = storeToRefs(store);
</script>

<template>
  <div class="signature-wrapper">
    <div class="signature-top" :style="signatureStyles.signatureTop">
      <i>С уважением</i>
      <i
        v-if="signature.name"
        class="signature-name"
        :style="signatureStyles.signatureName"
        >{{ signature.name }}</i
      >
      <i v-if="signature.position">{{ signature.position }}</i>
      <i v-if="signature.department">{{ signature.department }}</i>
    </div>

    <div
      class="signature-phone"
      v-if="signature.office_phone_number"
      :style="signatureStyles.signaturePhone"
    >
      <i>раб. тел.:</i>
      <i>{{ signature.office_phone_number }}</i>
    </div>
    <div
      class="signature-phone"
      v-if="signature.personal_phone_number"
      :style="signatureStyles.signaturePhone"
    >
      <i>моб. тел.:</i>
      <i>{{ signature.personal_phone_number }}</i>
    </div>

    <i v-if="signature.address" :style="signatureStyles.address">{{
      signature.address
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
