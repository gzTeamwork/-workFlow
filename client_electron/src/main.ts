'use strict'
import Vue from 'vue'
import App from './App.vue'
import Routers from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import settings from '@/core/settings'
// import {apps, routers, stores, autoLoad} from '@/core/autoLoad'
import { AppRouter } from '@/core/libs/AppCore'

import vueLog from '@/core/plugins/vueLogs'

Vue.use(iView)
Vue.use(vueLog)
Vue.config.productionTip = false

let AppRouters = new AppRouter(settings.applications)
console.log(AppRouters)
new Vue({
  router: Routers,
  render: h => h(App)
}).$mount('#app')
