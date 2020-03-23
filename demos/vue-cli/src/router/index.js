import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// hash 就是链接后面#about
// history 去除#的，正常我们使用的模式

const routes = [
  /* {
    path: '/',
    redirect: '/home' //重定向
  }, */
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Service')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact'),
    meta: {
      login: true
    },
    children: [
      {
        path: 'a',
        name: 'A',
        component: () => import('../views/A')
      },
      {
        path: 'b',
        name: 'B',
        component: () => import('../views/B')
      },
      {
        path: 'c',
        name: 'C',
        component: () => import('../views/C')
      },
    ]
  },
  {
    path: '/question/:id',
    name: 'question',
    component: () => import('../views/Question'),
    beforeEnter(to, from, next) {
      next();
    }
  },
  {
    path: '/err',
    name: 'err',
    component: () => import('../views/Err')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')

  },
  {
    path: '*', //上面路径都没有匹配到就选择这个路径
    redirect(to) {
      console.log(to);
      if (to.path == '/') {
        return '/home'
      } else {
        return '/err'
      }
    }
  },
 
]


const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active', //修改router-link-active
  linkExactActiveClass: 'exact', //修改exact链接 
})


router.beforeEach((to, from, next) => {
  const needLogin = to.matched.some(ele => ele.meta && ele.meta.login)
  console.log(needLogin);
  if (needLogin) {
    // 校验
    const isLogin = document.cookie.includes('login=true');
    if(isLogin) {
      next()
    }else{
      const toLoginFlag = window.confirm('这个页面需要登录后访问,要去登录吗');
      console.log(toLoginFlag)
      if(toLoginFlag){
        next('/login')
      }
    }
  } else {
    next();
  }
})


export default router
