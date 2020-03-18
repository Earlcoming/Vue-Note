# render();

```js
const vm = new Vue({
    el: '#app',
    template: '<h2>{{message}}</h2>',
    render(createElement) {
        return createElement('h1', {
            class: 'mess',
            style: {
                width: '200px',
                height: '200px',
                backgroundColor: 'red',
                color: 'white'
            },
            // domProps: {  //权重大于后面的参数('添加的数据')
            //     innerHTML: this.message
            // }

        }, ['添加的数据', 'fsfsajhk'])
    },
    data: {
        message: '数据'
    }
})

//jsx语法

render(h) {
    return (<h1 class="rend"><p>我是数据</p></h1>)
}
```