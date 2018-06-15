import Vue from 'vue'
import App from './App.vue'
import store from './store'

// using element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
    store,
  render: h => h(App)
}).$mount('#app')
