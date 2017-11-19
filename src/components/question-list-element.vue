<template>
  <div>
    <h3>{{ question.title }}</h3>

    <answer-list :answers="question.answers" :selectedAnswer="question.userAnswer" v-on:selectAnswer="onSelectAnswer"></answer-list>
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
    },
    methods: {
      onSelectAnswer(index, answer) {
        this.$store.dispatch('saveAnswer', {questionTitle: this.question.title, answerIndex: index});
      }
    }
  }
</script>

<style scoped>
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
</style>
