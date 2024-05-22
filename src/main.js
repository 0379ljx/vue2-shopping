import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vant-ui'
import '@/style/common.less'

// import { Toast } from 'vant'
// Toast('hhh')
// 按需导入vant
// import { Button, Switch } from 'vant'
// Vue.use(Button)
// Vue.use(Switch)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
