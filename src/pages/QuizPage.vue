<template>
  <div>
    <h2 class="my-5">Quiz: {{ quizNumber }}</h2>
    <div class="d-flex">
      <div class="w-25 pr-5">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(question, index) in questions.questions"
            :class="{active: index === currentIndex}">
            Pytanie {{ index + 1 }}
          </li>
        </ul>
      </div>
      <div class="w-75">
        <Quiz
          :allQuestions="questions"
          v-on:currentQuestionIndex="currentIndex = arguments[0]"
        />
      </div>
    </div>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
  import Quiz from './Quiz'
  import randomElement from '../helpers'

  export default {
    name: 'quizPage',
    components: { Quiz },

    data: function() {
      return {
        questions: {},
        quizNumber: '',
        currentIndex: 0,
      }
    },

    methods: {
      getQuestions: function() {
        return randomElement(this.$root.quizzes)
      },

      getQuizNumber: function() {
        return this.$root.quizzes.indexOf(this.questions) + 1
      },
    },

    created() {
      this.questions = this.getQuestions()
      this.quizNumber = this.getQuizNumber()
    }
  }
</script>
