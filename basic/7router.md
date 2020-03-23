# router 
# 导航守卫

## 全局守卫
- beforeEach
- beforeResolve
- afterEach

## 路由独享守卫
- beforeEnter

## 组件内守卫
- beforeRouteLeave 当离开这个路径时执行
- beforeRouteEnter 
- beforeRouteUpdate mounted
- to from next 


### 进入某一个路径时，执行顺序
- beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach 


# 动态路由
- /question/:id
- this.$route.params.xxx  
- this.$route.query.xxx  

## router-link

```html
html 代码
<router-link to="/home" tag="li">Home</router-link>|
<router-link to="/about">About</router-link>|
<router-link :to="{path: '/contact'}">Contact</router-link>|
<router-link :to="{name: 'Service'}">Service</router-link>
```

## 配置404页面
```js
 {
    path:'/err',
    name: 'err',
    component: () => import('../views/Err')  //懒加载
  },
  {
    path: '*', //上面路径都没有匹配到就选择这个路径
    redirect (to) {
      console.log(to);
      if(to.path == '/'){
        return '/home'
      }else{
        return '/err'
      }
    }
  }
  ```

  ## 重定向 redirect

  ```js
  {
    path: '/',
    redirect: '/home' //重定向
  },
  ```

  ## history 去除#的，正常我们使用的模式, 修改active,exact名称

  ```js
const router = new VueRouter({
  routes,
  mode: 'history', //去除#的，正常我们使用的模式
  linkActiveClass: 'active', //修改router-link-active
  linkExactActiveClass: 'exact', //修改exact链接 
})
  ```

## this.$router

- this.$router.push('/home')    push一个home页面
- this.$router.replace('/home')    replace(替换)home页面
- this.$router.go(-1)           back


## 导航守卫

- beforeRouteLeave() {} 
> 此路由所在的路径将要离开时时候执行(不作用子路由)

```js
beforeRouteLeave(to, from, next) {
    // to: 去的页面
    // from：从哪来
    // next() 执行了就跳转
    if (this.name) {
      const flag = window.confirm("你确定要离开吗");
      if (flag) {
        this.name = "";
        next();
      }
    } else {
      next();
    }
  },
```
- beforeRouteEnter() {}
> 此路由所在的路径将要进入时时候执行

```js
beforeRouteEnter(to, from, next) {
    // 还没进入路由，所以this为undefined
    console.log(this, )
    next(vm => {
      // 这里的vm就是代表的this
      console.log(vm)
    })
  }
```
- beforeRouteUpdate() {}
> 配合mounted 组件更新的时候

```js
{
    path: '/question/:id',
    name: 'question',
    component: () => import('../views/Question'),
    beforeEnter(to, from, next) { //路由守卫
      next();
    }
  },
  
//   保护每一个路径
  router.beforeEach((to, from, next) => {
      next();
  })
  router.afterEach(() => {
    //   没有参数
      console.log('afterEach')
  })

  // 路由内的都加载完就执行resolve
  router.beforeResolve((to, from, next) => {
      next()
  })
  ```

