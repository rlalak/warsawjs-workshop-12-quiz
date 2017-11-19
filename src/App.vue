<template>
  <div id="app">
    <the-header></the-header>

    <quiz-details :quiz="quizJson"></quiz-details>

    <div>Liczba poprawnych odpowiedzi {{ correctAnswers() }}</div>

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
    computed: {
      quizJson: function() {
        return this.$store.getters.quiz;
      }
    },
    methods: {
      correctAnswers: function() {
        let correctAnswers = 0;
        let quetions = this.$store.getters.quiz.questions;
        console.log('correctAnswers', quetions);
        for (let index in quetions) {//console.log(quetions[index].userAnswer , quetions[index].correctAnswerIndex);
          if (quetions[index].userAnswer === quetions[index].correctAnswerIndex) {
            correctAnswers++;
          }
        }

        return correctAnswers;
      }
    },
    mounted() {
      this.$store.dispatch('init');
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
