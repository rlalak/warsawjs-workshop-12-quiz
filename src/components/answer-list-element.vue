<template>
   <span> {{ answer }} </span>
</template>

<script>
  export default {
    name: "AnswerListElement",
    props: {
      answer: String
    }
  }
</script>
