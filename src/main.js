import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "./store"
import AOS from 'aos'
import { Dropdown,Menu,Icon,Layout } from "ant-design-vue";
import 'aos/dist/aos.css'

Vue.config.productionTip = false
// Vue.use(Atdn)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Layout)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app');