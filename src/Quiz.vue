<template>
  <div class="container">
    <div>
    {{ currentQuestion.text }}
    </div>
    <button class="col-md-6 btn" v-for="(answer, index) in currentQuestion.answers" v-on:click="chooseAnswer(index)">{{ answer }}</button>
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
        if(this.allQuestions.questions.length > this.currentIndex + 1) {
          this.currentIndex++
        } else {
          alert("win")
        }
      },

      chooseAnswer(index) {
        if(index === this.currentQuestion.correctAnswerIndex) {
          this.incrementIndex()
        } else {
          alert("game over")
          this.currentIndex = 0
        }
      }
    }
  }
</script>
