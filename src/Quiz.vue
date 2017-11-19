<template>
  <div class="container">
    <div>
    {{ currentQuestion.text }}
    </div>
    <button class="col-md-6" v-for="(answer, index) in currentQuestion.answers" v-on:click="chooseAnswer(index)">{{ answer }}</button>
  </div>
</template>

<script>
  export default {

    props: ['allQuestions'],

    data: function() {
      return {
        currentIndex: 0,
      }
    },

    computed: {
      currentQuestion: function() {
        return this.allQuestions.questions[this.currentIndex]
      }
    },

    methods: {
      incrementIndex() {
        return this.allQuestions.length > this.currentIndex++ ? this.currentIndex++ : alert("win")
      },

      chooseAnswer(index) {
        return index === this.currentQuestion.correctAnswerIndex
              ? this.incrementIndex()
              : alert("game over")
      }
    }
  }
</script>
