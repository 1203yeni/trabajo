import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Axios from 'axios'
import VueAxios from 'vue-axios'



import { BootstrapVue, IconsPlugin } 
from 'bootstrap-vue'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueAxios, Axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')