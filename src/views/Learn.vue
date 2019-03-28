<template>
    <div>
        <course-list></course-list>
        <router-link tag="button"
                     class="change-course-btn"
                     :to="{name : 'changeCourse'}"
        >
                     修改课程
        </router-link>
    </div>

</template>

<script>
import CourseList from '@/components/learn/CourseList'
export default {
    components : {
        CourseList
    }
}
</script>

<style scoped>
    .change-course-btn{
        border: none;
        display: block;
        margin: 20px auto;
        width: 200px;
        line-height: 40px;
        background: #000;
        color: #fff;
    }
</style>