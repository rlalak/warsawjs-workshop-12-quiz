<template>
  <section v-if="quiz">
    <h2>{{ quiz.name }}</h2>
    <div class="tag">
      <p>{{ quiz.categoryName }}</p>
    </div>
    <img :src="quiz.promo">
  </section>
</template>

<script>
  export default {
    name: "QuizDetails",
    props: {
      quiz: Object
    }
  }
</script>
