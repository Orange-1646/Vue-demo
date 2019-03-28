<template>
    <div>
        添加学生：
        <input v-model="name" type="text" />
        <button @click='addStudent(name); clear()'>确认</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    data(){
        return {
            name : ''
        }
    },
    methods : {
        clear(){
            this.name = ''
        },
        ...mapMutations('student', ['addStudent'])
    }
}
</script>

<style scoped>

</style>