<template>
  <div id="app" class="container">
    <Quiz :allQuestions="questions" />
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
      }
    },

    methods: {
      getQuestions: function() {
        return randomElement(quizzes.quizzes)
      }
    },

    created() {
      this.questions = this.getQuestions()
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
