<template>
    <ul>
        <li v-for="item in courseList" :key="item.name">
            <img class="poster" :src="item.poster" alt="">
            <p class="title">{{item.name}}</p>
            <div class="wrapper">
                <div class="price" :class="item.price == 0 ? 'free' : ''">{{item.price == 0 ? '免费' : '￥' + item.price}}</div>
                <div class="institution">渡一教育</div>
            </div>
        </li>
    </ul>

</template>

<script>
import {mapState} from 'vuex'
export default {
    computed : {
        ...mapState('course', ['courseList'])
    }
}
</script>

<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content:left;
        align-content: space-between;
        font-size: 14px;
    }
    li{
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        width: 220px;
    }
    li:hover{
        border: 1px solid #ddd;
        box-shadow: 1px 1px 2px 1px #ececec;
    }
    img{
        width: 220px;
        height: 124px;
    }
    p{
        color: #333;
        margin: 5px 0;
        min-height: 40px;
    }
    p:hover{
        color: #62b4f7;
    }
    .wrapper{
        display: flex;
        justify-content: space-between;
    }
    .price{
        color: #e85308;
    }
    .price.free{
        color: #5fb41b;
    }
    .institution{
        color: #999;
    }
</style>