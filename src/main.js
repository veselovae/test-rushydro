import "./app/styles/main.css";

import { createApp } from "vue";

import App from "./app/App.vue";
import VMask from "@ssibrahimbas/v-mask";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(VMask).use(pinia).mount("#app");
