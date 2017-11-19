<template>
  <div id="app" class="container">
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
  </div>
</template>

<script>
  import Quiz from './Quiz'
  import quizzes from './quizzes_json.json'
  import randomElement from './helpers'

  export default {
    name: 'app',
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
        return randomElement(quizzes.quizzes)
      },

      getQuizNumber: function() {
        return quizzes.quizzes.indexOf(this.questions) + 1
      },
    },

    created() {
      this.questions = this.getQuestions()
      this.quizNumber = this.getQuizNumber()
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
