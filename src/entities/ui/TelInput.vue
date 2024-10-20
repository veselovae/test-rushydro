<script setup>
defineProps(["modelValue", "maskInp"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-item">
    <label for="input"><slot /></label>
    <input
      type="tel"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="+7 (999) 999-99-99"
      v-mask="maskInp"
    />
  </div>
</template>
