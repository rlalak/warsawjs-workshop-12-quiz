<template>
   <span v-on:click="onClick"> {{ answer }} </span>
</template>

<script>
  export default {
    name: "AnswerListElement",
    props: {
      answer: String
    },
    methods: {
      onClick: function() {
        this.$emit('selectAnswer', this.answer);
      }
    }
  }
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
