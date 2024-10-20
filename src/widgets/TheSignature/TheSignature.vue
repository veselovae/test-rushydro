<script setup>
import { useForm } from "@/app/store/store.js";
import { storeToRefs } from "pinia";

const store = useForm();
const { getSignature } = storeToRefs(store);

import { signatureStyles } from "./lib/constants";
</script>

<template>
  <div class="signature-wrapper">
    <div class="signature-top" :style="signatureStyles.signatureTop">
      <i>С уважением</i>
      <i
        v-if="getSignature.name"
        class="signature-name"
        :style="signatureStyles.signatureName"
        >{{ getSignature.name }}</i
      >
      <i v-if="getSignature.position">{{ getSignature.position }}</i>
      <i v-if="getSignature.department">{{ getSignature.department }}</i>
    </div>

    <div
      class="signature-phone"
      v-if="getSignature.office_phone_number"
      :style="signatureStyles.signaturePhone"
    >
      <i>раб. тел.:</i>
      <i>{{ getSignature.office_phone_number }}</i>
    </div>
    <div
      class="signature-phone"
      v-if="getSignature.personal_phone_number"
      :style="signatureStyles.signaturePhone"
    >
      <i>моб. тел.:</i>
      <i>{{ getSignature.personal_phone_number }}</i>
    </div>

    <i v-if="getSignature.address" :style="signatureStyles.address">{{
      getSignature.address
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
