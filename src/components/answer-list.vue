<template>
  <ul>
    <li v-for="(answer, index) in answers" :key="answer">
      <answer-list-element :answer="answer"  v-on:selectAnswer="onSelectAnswer(index)"></answer-list-element>
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
    },
    methods: {
      onSelectAnswer: function(index) {
        this.$emit('selectAnswer', index, this.answers[index]);
      }
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
