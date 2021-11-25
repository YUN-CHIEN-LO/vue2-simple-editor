import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRx from "vue-rx";

import CKEditor from "@ckeditor/ckeditor5-vue2";

import "./scss/index.scss";
Vue.config.productionTip = false;
Vue.use(VueRx);

Vue.use(CKEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
