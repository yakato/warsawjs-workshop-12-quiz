import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage'
import QuizPage from '../pages/QuizPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/play',
      component: QuizPage,
    },
  ],
})
