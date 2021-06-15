import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

//createApp(App).use(store).use(router).mount("#app");

const app = createApp(App);
app.use(store).use(router).mount("#app");

app.directive("format", {
  beforeMount(el, binding) {
    el.style.fontSize = binding.value + "px";
    //modifier
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }
    if (binding.modifiers.orang) {
      el.style.color = "orange";
    }
    /*  console.log(`Directive Name => ${binding.name}`);
    console.log(`Directive Value => ${binding.value}`);*/
  },
});
