import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
  // jsx 渲染render
  /* render(h) {
    const tag = 'a';
    return (
      <tag
        style={{ color: 'red', fontSize: '18px' }}
        on-click={() => { console.log(1) }}
      >
        我是一个标题
      </tag>
    )
  } */
}).$mount('#app')
