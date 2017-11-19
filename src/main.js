import Vue from 'vue'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import quizzes from './quizzes_json.json'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
    quizzes: quizzes.quizzes,
  }
})
