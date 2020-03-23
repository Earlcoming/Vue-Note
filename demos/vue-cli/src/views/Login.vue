<template>

<div>
    <button @click="login">登录</button>
</div>

</template>

<script>
export default {
    methods: {
        login () {
            const expries = 900 * 24 * 60 * 60 * 1000; //900天* 24小时 * 60分钟 * 60秒* 1000毫秒;
            const odata = new Date( +new Date() + expries); //900天失效
            document.cookie = `login=true;expries=${odata.toUTCString()}`;
        }
    }
}
</script>

<style lang='sass' scoped>

</style>