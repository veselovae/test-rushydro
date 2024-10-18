<script setup>
import { useForm } from "../app/store/store.js";

const store = useForm();
store.increment();
</script>

<template>
  <div class="signature-wrapper">
    <h1>counter:</h1>
    <span>{{ store.getCounter }}</span>

    <button @click="store.increment()">increment</button>
  </div>
</template>
