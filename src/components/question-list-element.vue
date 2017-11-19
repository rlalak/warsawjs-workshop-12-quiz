<template>
  <div>
    <h3>{{ question.title }}</h3>

    <answer-list :answers="question.answers"></answer-list>
  </div>
</template>

<script>
  import AnswerList from './answer-list.vue';
  export default {
    name: "QuestionListElement",
    props: {
      question: Object
    },
    components: {
      AnswerList
    }
  }
</script>

<style scoped>
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
</style>
