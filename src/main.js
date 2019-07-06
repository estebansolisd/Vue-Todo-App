import Vue from "vue";
import App from "./components/App.vue"
import { store } from "./reducer/reducer";
import { router } from "./router/router";

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
