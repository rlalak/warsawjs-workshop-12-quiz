<template>
  <ul>
    <li v-for="answer in answers">
      <answer-list-element :answer="answer"></answer-list-element>
    </li>
  </ul>
</template>

<script>
  import AnswerListElement from './answer-list-element.vue'
  export default {
    name: "AnswerList",
    props: {
      answers: Array
    },
    components: {
      AnswerListElement
    }
  }
</script>

<style scoped>
  ul {
    margin: 20px;
    padding-left: 10px;
    list-style: circle;
  }
</style>
