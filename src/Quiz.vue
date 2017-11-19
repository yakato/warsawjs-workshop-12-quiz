<template>
  <div class="container">
    <div>
    {{ currentQuestion.text }}
    </div>
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
