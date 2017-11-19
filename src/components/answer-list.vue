<template>
  <ul>
    <li v-for="(answer, index) in answers" :key="answer">
      <answer-list-element :answer="answer"  v-on:selectAnswer="onSelectAnswer(index)" v-bind:class="getClass(index)"></answer-list-element>
    </li>
  </ul>
</template>

<script>
  import AnswerListElement from './answer-list-element.vue'
  export default {
    name: "AnswerList",
    props: {
      answers: Array,
      selectedAnswer: 0
    },
    components: {
      AnswerListElement
    },
    methods: {
      onSelectAnswer: function(index) {
        this.$emit('selectAnswer', index, this.answers[index]);
      },
      getClass: function(index) {
        if (index === this.selectedAnswer) {
          return 'selected';
        }
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

  .selected {
    background-color: orange;
  }
</style>
