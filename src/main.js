import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import request from '@/utils/request'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';//引入axios
import VueRouter from 'vue-router';
import router from './router'
import store from './store'
import "@/assets/font/font.css"
import qs from 'qs'

Vue.use(VueRouter)
Vue.prototype.request = request;
Vue.prototype.$axios = axios;//把axios挂载到vue上
Vue.config.productionTip = false
Vue.use(ElementUI);
axios.defaults.withCredentials = true;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
