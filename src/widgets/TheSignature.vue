<script setup>
import { useForm } from "../app/store/store.js";

const store = useForm();
</script>

<template>
  <div class="signature-wrapper">
    <div class="signature-top">
      <i>С уважением</i>
      <i v-if="store.getSignature.name" class="signature-name">{{
        store.getSignature.name
      }}</i>
      <i v-if="store.getSignature.position">{{
        store.getSignature.position
      }}</i>
      <i v-if="store.getSignature.department">{{
        store.getSignature.department
      }}</i>
    </div>

    <div class="signature-phone" v-if="store.getSignature.office_phone_number">
      <i>раб. тел.:</i>
      <i>{{ store.getSignature.office_phone_number }}</i>
    </div>
    <div
      class="signature-phone"
      v-if="store.getSignature.personal_phone_number"
    >
      <i>моб. тел.:</i>
      <i>{{ store.getSignature.personal_phone_number }}</i>
    </div>

    <i v-if="store.getSignature.address">{{ store.getSignature.address }}</i>

    <a class="logo" href="https://www.google.com/" target="_blank">
      <img src="../shared/assets/logo.png" alt="logo" />
    </a>
  </div>
</template>

<style scoped>
.signature-wrapper {
  width: 600px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  color: #3e6e9b;
}

.signature-wrapper i {
  display: block;
  margin-bottom: 10px;
}

.signature-name {
  font-weight: 600;
}

.signature-phone {
  display: flex;
  gap: 5px;
}

.signature-top {
  margin-bottom: 30px;
}

.logo {
  cursor: pointer;
}

.logo img {
  width: 200px;
}
</style>
