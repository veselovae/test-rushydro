<template>
  <button>
    <img src="../assets/copy-icon.svg" alt="" class="icon" />
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: #f08400;
  border-radius: 4px;
  padding: 8px 15px;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  transition: background-color 0.1s linear;
  cursor: pointer;
}

button:hover {
  background-color: #e27c00;
}

.icon {
  width: 15px;
  margin-right: 5px;
}
</style>
