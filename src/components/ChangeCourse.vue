<template>
    <div>
        <div class="change-area" v-if="isChanging">
            <div class="box">
                <label for="class-name">课程名称：</label>
                <input type="text" id="class-name" v-model="focusedClass.name">
            </div>
            <div class="box">
                <label for="class-price">课程价格：</label>
                <input type="text" id="class-price" v-model="focusedClass.price">
            </div>
            <button @click="changeCourse(focusedClass), doneChange()" class="confirm">
                提交修改
            </button>
        </div>
        <template v-else>
            <ul>
                <li class="class" v-for="(item, index) in courseList" :key="item.name">
                    <span>{{item.name}}</span>
                    <button @click="change(index)" class="change-btn">点击修改</button>
                    <span class="price">{{item.price == 0 ? '免费' : '￥' +item.price}}</span>
                </li>
            </ul>
            <!-- <button class="finish">已完成修改</button> -->
            <router-link tag="button"
                         class="finish"
                         :to="{name : 'learn'}"            
            >
            已完成全部修改
            </router-link>
        </template>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data (){
        return{
            isChanging : false,
            focusedClass : {}
        }
    },
    computed : {
        ...mapState('course', ['courseList'])
    },
    methods : {
        doneChange(){
            this.isChanging =false
        },
        change(index){
            this.isChanging = true
            this.focusedClass = {
                name : this.courseList[index].name,
                price : this.courseList[index].price,
                index
            }
        },
        ...mapMutations('course', ['changeCourse'])
    }
}
</script>

<style scoped>
    .box{
        font-size: 14px;
        margin: 10px 0;
    }
    .class{
        width: 800px;
        line-height: 40px;
        font-size: 14px;
        padding: 10px 0;
        border-bottom: 1px solid #666;
    }
    .price{
        float: right;
        margin-right: 50px;
    }
    .class button{
        float: right;
    }
    button{
        border: none;
        background: #000;
        color: #fff;
        height: 40px;
    }
    .finish{
        margin: 30px auto;
    }
    
</style>