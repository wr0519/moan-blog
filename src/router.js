import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerPC = [
    {
      path:'/index',
      name:'index',
      component:() => import('./App.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/grades',
      name: 'grades',
      component: () => import('./views/Grades.vue')
    },
    {
      path: '/Syllabus',
      name: 'Syllabus',
      component: () => import('./views/Syllabus.vue')
    },
    {
      path:'/week1',
      name:'week1',
      component: () => import('./views/Lectures/week1.vue')
    },
    {
      path:'/week2',
      name:'week2',
      component: () => import('./views/Lectures/week2.vue')
    },
    {
      path:'/week3',
      name:'week3',
      component: () => import('./views/Lectures/week3.vue')
    },
    {
      path:'/week4',
      name:'week4',
      component: () => import('./views/Lectures/week4.vue')
    },
    {
      path:'/week5',
      name:'week5',
      component: () => import('./views/Lectures/week5.vue')
    },
    {
      path:'/week6',
      name:'week6',
      component: () => import('./views/Lectures/week6.vue')
    },
    {
      path:'/week7',
      name:'week7',
      component: () => import('./views/Lectures/week7.vue')
    },
    {
      path:'/week8',
      name:'week8',
      component: () => import('./views/Lectures/week8.vue')
    },
    {
      path:'/week9',
      name:'week9',
      component: () => import('./views/Lectures/week9.vue')
    },
    {
      path:'/week10',
      name:'week10',
      component: () => import('./views/Lectures/week10.vue')
    },
    {
      path:'/week11',
      name:'week11',
      component: () => import('./views/Lectures/week11.vue')
    },
    {
      path:'/week12',
      name:'week12',
      component: () => import('./views/Lectures/week12.vue')
    },
    {
      path:'/week13',
      name:'week13',
      component: () => import('./views/Lectures/week13.vue')
    },
    {
      path:'/week14',
      name:'week14',
      component: () => import('./views/Lectures/week14.vue')
    },
    {
      path:'/project1',
      name:'project1',
      component:()=>import('./views/Projects/project1.vue')
    },
    {
      path:'/project2',
      name:'project2',
      component:()=>import('./views/Projects/project2.vue')
    },
    {
      path:'/instructor',
      name:'instructor',
      component:()=>import('./views/Instructor.vue')
    }
]
const routerM = [
  {
    path:'/index',
    name:'index',
    component:() => import('./App.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Mobile/Home.vue')
  },
  {
    path: '/grades',
    name: 'grades',
    component: () => import('./views/Mobile/Grades.vue')
  },
  {
    path: '/Syllabus',
    name: 'Syllabus',
    component: () => import('./views/Mobile/Syllabus.vue')
  },
  {
    path:'/week1',
    name:'week1',
    component: () => import('./views/Mobile/Lectures/week1.vue')
  },
  {
    path:'/week2',
    name:'week2',
    component: () => import('./views/Mobile/Lectures/week2.vue')
  },
  {
    path:'/week3',
    name:'week3',
    component: () => import('./views/Mobile/Lectures/week3.vue')
  },
  {
    path:'/week4',
    name:'week4',
    component: () => import('./views/Mobile/Lectures/week4.vue')
  },
  {
    path:'/week5',
    name:'week5',
    component: () => import('./views/Mobile/Lectures/week5.vue')
  },
  {
    path:'/week6',
    name:'week6',
    component: () => import('./views/Mobile/Lectures/week6.vue')
  },
  {
    path:'/week7',
    name:'week7',
    component: () => import('./views/Mobile/Lectures/week7.vue')
  },
  {
    path:'/week8',
    name:'week8',
    component: () => import('./views/Mobile/Lectures/week8.vue')
  },
  {
    path:'/week9',
    name:'week9',
    component: () => import('./views/Mobile/Lectures/week9.vue')
  },
  {
    path:'/week10',
    name:'week10',
    component: () => import('./views/Mobile/Lectures/week10.vue')
  },
  {
    path:'/week11',
    name:'week11',
    component: () => import('./views/Mobile/Lectures/week11.vue')
  },
  {
    path:'/week12',
    name:'week12',
    component: () => import('./views/Mobile/Lectures/week12.vue')
  },
  {
    path:'/week13',
    name:'week13',
    component: () => import('./views/Mobile/Lectures/week13.vue')
  },
  {
    path:'/week14',
    name:'week14',
    component: () => import('./views/Mobile/Lectures/week14.vue')
  },
  {
    path:'/project1',
    name:'project1',
    component:()=>import('./views/Mobile/Projects/project1.vue')
  },
  {
    path:'/project2',
    name:'project2',
    component:()=>import('./views/Mobile/Projects/project2.vue')
  },
  {
    path:'/instructor',
    name:'instructor',
    component:()=>import('./views/Mobile/Instructor.vue')
  }
]

var routes = []
let Adaptive = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
if (navigator.userAgent.match(Adaptive)) {
    routes = routerM
} else {
    routes = routerPC
}
const router = new Router({
    mode : "hash",
    routes
})

export default router