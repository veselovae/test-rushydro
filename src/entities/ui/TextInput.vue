<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="input-item">
    <label for="input"><slot /></label>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style>
.input-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input-item input,
.input-item label {
  color: #3e6e9b;
}

.input-item label {
  font-weight: 600;
  margin-bottom: 5px;
}

.input-item input {
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px #b1c4d6 solid;
}

.input-item input:focus {
  outline: none;
  border: 1px #3e6e9b solid;
}
</style>
