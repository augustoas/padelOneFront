import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from 'buefy'

Vue.config.productionTip = false;
Vue.use(Buefy)

import {eventBus} from "@/plugins/eventBus";
Vue.prototype.$eventBus=eventBus


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
