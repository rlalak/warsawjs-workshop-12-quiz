import Vue from 'vue';

import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    quiz: {}
  },
  actions: {
    init({commit}) {
      fetch('/static/quiz.json')
        .then((res) => res.json())
        .then((quiz) => {
          commit('init', quiz);
        })
    },
    saveAnswer: function({commit}, data) {
      commit('saveAnswer', data);
    }
  },
  mutations: {
    init: function (state, quiz) {
      state.quiz = quiz;
    },
    saveAnswer: function(state, data) {
      let questions = state.quiz.questions;

      for (let index in questions) {
        if (questions[index].title === data.questionTitle) {
          console.log('save', data.questionTitle, data.answerIndex);
          questions[index].userAnswer = data.answerIndex;
        }
      }
    }
  },
  getters: {
    quiz: function (state) {
      return state.quiz;
    }
  }
});
