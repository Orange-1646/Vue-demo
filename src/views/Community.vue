<template>
    <div>
        <div class="community-nav">
            <router-link :to="{name : 'academic'}">学术讨论</router-link>
            <router-link :to="{name : 'personal'}">个人中心</router-link>
            <router-link :to="{name : 'download'}">资源下载</router-link>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {
    name :"community"
}
</script>

<style scoped>
    a{
        display: inline-block;
        padding: 10px;
        margin-right: 20px;
    }
    .active{
        background: #000;
        color: #fff;
    }
</style>