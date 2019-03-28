<template>
    <div>
        <add-student />
        <student-list /> 
    </div>
</template>

<script>
import AddStudent from '@/components/student/Add_student.vue'
import StudentList from '@/components/student/Student_List.vue'
export default {
    components : {
        AddStudent,
        StudentList
    },
    name: 'student'
}
</script>

<style>

</style>