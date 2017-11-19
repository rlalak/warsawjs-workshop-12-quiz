<template>
  <section v-if="quiz" class="quiz">
    <div>
      <div class="leftColumn">
        <h2>{{ quiz.name }}</h2>
        <div class="tag">
          <p>{{ quiz.categoryName }}</p>
        </div>
      </div>
      <div class="rightColumn">
        <img :src="quiz.promo">
      </div>
      <div class="clearfix"></div>
    </div>

    <question-list :questions="quiz.questions"></question-list>
  </section>
</template>

<script>
  import QuestionList from './question-list.vue'
  export default {
    name: "QuizDetails",
    props: {
      quiz: Object
    },
    components: {
      QuestionList
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 22px;
  }

  .tag {
    font-weight: bold;
    font-size: 14px;
  }

  .rightColumn {
    float: right;
  }

  .leftColumn {
    float: left;
  }

  .clearfix {
    clear: both;
  }
</style>
