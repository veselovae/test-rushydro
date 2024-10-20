import "./app/styles/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VMask from "@ssibrahimbas/v-mask";

import App from "./app/App.vue";

const pinia = createPinia();

createApp(App).use(VMask).use(pinia).mount("#app");
