import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "./store"
import { Dropdown,Menu,Icon } from "ant-design-vue";
// import Atdn from "ant-design-vue"

Vue.config.productionTip = false
// Vue.use(Atdn)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');