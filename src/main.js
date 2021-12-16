import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Embed from 'v-video-embed'

Vue.config.productionTip = false;
Vue.use(Embed);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
