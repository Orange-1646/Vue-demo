<template>
    <div>
        <ul>
            <router-link :to="{ name : 'question', params : {id : item.questionId}}" tag="li" v-for="item in questionList" :key="item.questionId">
                {{item.title}}
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            questionList : [
                {
                    questionId : 201801,
                    title : "到底什么是es6中的class（类）？怎么实现class（类）？"
                },
                {
                    questionId : 201802,
                    title : "什么是es6箭头函数？与普通函数的区别在哪里？到底该不该使用箭头函数？"
                },
                {
                    questionId : 201803,
                    title : "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
                }
            ]
        }
    },
}
</script>

<style scoped>
    ul{
        margin-top: 20px;
        line-height: 30px;
    }
    li{
        cursor: pointer;
    }
</style>