<template>
  <div class="container">
    <div>
    {{ currentQuestion.text }}
    </div>
    <button class="col-md-6" v-for="answer in currentQuestion.answers">{{ answer }}</button>

  </div>
</template>

<script>
  export default {

    props: ['allQuestions'],

    data: function() {
      return {
        currentQuestion: this.allQuestions.questions[0],
      }
    },
  }
</script>
