import Vue from 'vue'
import App from './App.vue'
// ES6 解构 按需引入
// import { Row, Button, Container, Header, Main, Aside, Menu, Submenu } from 'element-ui';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './api/mock'

Vue.config.productionTip = false

// 将Element中的组件全局注入到Vue中 之后就可以使用el标签了
Vue.use(ElementUI)

// 按需引入 为了在项目打包过程中减小项目的体积
// Vue.use(Row)
// Vue.use(Button)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Main)
// Vue.use(Aside)
// Vue.use(Menu)
// Vue.use(Submenu)

new Vue({
  router,
  store, // 创建好了store并且挂载到了vue实例上
  render: h => h(App),
}).$mount('#app')
