<template>
  <section class="quetion-list">
    <div class="question" v-for="question in questions">
      <question-list-element :question="question"></question-list-element>
    </div>
  </section>
</template>

<script>
  import questionListElement from './question-list-element.vue'
  export default {
    name: "QuestionList",
    props: {
      questions: Array
    },
    components: {
      questionListElement
    }
  }
</script>

<style scoped>
  .question {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid black;
    text-align: left;
  }
</style>
