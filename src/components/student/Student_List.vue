<template>
    <div>
        学生列表：
        <ul>
            <li v-for="(item, index) in studentList" :key="index + item">
                {{item}}
            </li>
        </ul>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    computed : mapState('student',['studentList'])
}
</script>

<style scoped>

</style>