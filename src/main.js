import {
  createApp,
  // ref,
  // h
} from "vue";
import App from "./App.vue";

createApp(App, { title: "WSCFAN" })
  .provide("title", "hello world")
  .mount("#app");
// createApp({
//   setup() {
//     const name = ref("张飞");
//     return () =>
//       h("div", {
//         innerHTML: `<h1>${name.value}来也`,
//       });
//   },
// }).mount("#app");
