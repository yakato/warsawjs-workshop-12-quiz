<template>
  <div class="card">
    <h2 class="card-header">{{ currentQuestion.text }}</h2>
    <div class="card-body">
      <div class="d-flex flex-wrap">
        <div class="w-100">
          <button class="btn btn-outline-primary btn-block text-left"
                  v-for="(answer, index) in currentQuestion.answers"
                  v-on:click="chooseAnswer(index)">
                  {{ answer }}
          </button>
        </div>
      </div>
    </div>
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
          this.$emit('currentQuestionIndex', this.currentIndex)
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
          this.$emit('currentQuestionIndex', this.currentIndex)
        }
      }
    }
  }
</script>
