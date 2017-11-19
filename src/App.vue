<template>
  <div id="app">
    <the-header></the-header>

    <quiz-details :quiz="quizJson"></quiz-details>

    <router-view/>
  </div>
</template>

<script>
  import TheHeader from './components/the-header.vue';
  import QuizDetails from './components/quiz-details.vue';

  export default {
    name: 'app',
    components: {
      TheHeader, QuizDetails
    },
    data() {
      return {
        quizJson: null
      }
    },
    mounted() {
      fetch('/static/quiz.json')
        .then((res) => res.json())
        .then((quiz) => {
          this.quizJson = quiz;
        })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    padding: 20px;
  }
</style>
