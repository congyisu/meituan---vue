<template>
    <div class="head">
        <router-link to='/index' class="iconfont" tag="A">&#xe652;</router-link>
        <h2>电影</h2>
         <router-link tag='a' to='/person'>
            <span class="iconfont icon-ren"></span>
            我的
        </router-link>
    </div>
</template>

<script type="es6">
    export default {

    }
</script>

<style lang="scss">
    .head{
        height: 50px;
        line-height: 50px;
        width: 100%;
        background: #06C1AE;
        color: #ffffff;
        position: relative;
        border-bottom: 1px solid #21897D;
    }
    .head a {
        float: left;
        color: #ffffff;
        height: 100%;

    }
    .head a:first-child {
        position: absolute;
        left: 2%;

    }
    .head h2 {
        width: 100%;
        text-align: center;
        float: left;
        font-size:16px;
    }
    .head a:last-child{
        position: absolute;
        right: 2%;
        display: flex;
        flex-direction: column;
    }
    .head a:last-child span {
        text-align: center;
        height: 30%;
    }
    .head a:last-child span:first-child {
        margin-top: -15%;
    }
    
</style>
