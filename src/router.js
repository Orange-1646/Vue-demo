import Vue from 'vue'
import Router from 'vue-router'

let Home = () => import('./views/Home.vue')
let About = () => import('./views/About.vue')
let Community = () => import('./views/Community.vue')
let Learn = () => import('./views/Learn.vue')
let Student = () => import('./views/Student.vue')

let Academic = () => import('./components/community/Academic.vue')
let Download = () => import('./components/community/Download.vue')
let Personal = () => import('./components/community/Personal.vue')

let Question = () => import('./components/Question.vue')

let Err = () => import('./components/Err.vue')
let ChangeCourse = () => import('./components/ChangeCourse.vue')

Vue.use(Router)

let router = new Router({
  mode : "history",
  base : "/",
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/community',
      name: 'community',
      redirect : '/community/academic',
      component: Community,
      children: [        
        {
          path: '/community/academic',
          name: 'academic',
          component: Academic
        },
        {
          path: '/community/download',
          name: 'download',
          component: Download
        },
        {
          path: '/community/personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path : "/question/:id",
      name : "question",
      component: Question
    },
    {
      path : "/error",
      name : "404notfound",
      component : Err
    },
    {
      path : "/learn/changecourse",
      name : "changeCourse",
      component : ChangeCourse
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.matched.length === 0){
    next('/error')
  }
  else{
    next()
  }
})
export default router