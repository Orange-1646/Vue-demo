<template>
  <div id="app">
    <div class="header">
      <div class="wrapper">

        <div class="logo">
          <img src="./assets/images/logo.png" alt=""/>
        </div>

        <ul class="nav">
          <router-link tag="li" to="/home">首页</router-link>
          <router-link tag="li" to="/about">关于</router-link>
          <router-link tag="li" to="/student">学员展示</router-link>
          <router-link tag="li" to="/community">社区</router-link>
          <router-link tag="li" to="/learn">课程学习</router-link>
        </ul>
      </div>

    </div>

    <router-view class="router"></router-view>

    <div class="footer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.active{
  border-bottom: 2px solid #ffffff;
}
.header{
  background: #000000;
  height: 70px;
  padding-bottom: 2px;
}
.header .wrapper{
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
}
.logo{
  line-height: 70px;
}
.logo > img{
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.nav{
  width: 400px;
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
}
.nav > li{
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
}
.footer{
  background: #000000;
  width: 100%;
  height: 50px;
}
.router{
  width: 1000px;
  min-height: 629px;
  margin: 0 auto;
  padding-top: 40px;
}
</style>
