<script setup lang="ts">
import ScoreBoard from './components/Scoreboard.vue'
import QuestionAlternative from './components/QuestionAlternative.vue'
import type { Questions } from '../models/Questions'

import { ref } from 'vue'

var questionSent = ref(false)

const questions: Questions = {
  answers_list: [
    'Oi, tudo bem?',
    'Nossa, vc é muito linda rssss',
    'vamo fumar um nargas?',
    'Tá estudando pra OAB?',
  ],
  category: 'teste',
  correct_answer: 'Tá estudando pra OAB?',
  difficulty: 'easy',
  question: 'Qual a melhor maneira de puxar assunto com a gata?',
  type: 'test',
}

var currentQuestion = ref<Questions>(questions)

const sendResponse = () => {
  console.log('enviando resposta xD')
  questionSent.value = true

  console.log(questionSent)
}

// selecionar resposta

const answerSelected = ref('')

const toggleSelection = (answer: string) => {
  console.log(answer)
  answerSelected.value = answer

  console.log(answerSelected)
}

// próxima pergunta

const nextQuestion = () => {
  console.log('next question')
  handleScoreboard()
  questionSent.value = false
  answerSelected.value = ''
}

// increment placar

const playerScore = ref(0)
const computerScore = ref(0)

const handleScoreboard = () => {
  if (answerSelected.value === currentQuestion.value.correct_answer) {
    playerScore.value = playerScore.value + 1
  } else {
    computerScore.value = computerScore.value + 1
  }
}
</script>

<template lang="">
  <div class="wrapper">
    <div class="container">
      <ScoreBoard :playerScore="playerScore" :computerScore="computerScore" />
      <div>
        <p class="question-label">{{ currentQuestion.question }}</p>
        <div
          class="questions-container"
          v-for="(answer, index) in currentQuestion.answers_list"
          :key="index"
        >
          <QuestionAlternative
            :answer="answer"
            :onClickAnswer="toggleSelection"
            :answerSelected="answerSelected === answer"
            :correctAnswer="currentQuestion.correct_answer"
            :isAnswered="questionSent"
          />
        </div>
      </div>
      <div class="button-container">
        <p v-if="questionSent === true && answerSelected === currentQuestion.correct_answer">
          ✅ Certa resposta!!! ✅
        </p>
        <p v-if="questionSent === true && answerSelected !== currentQuestion.correct_answer">
          ✅ Resposta incorreta ✅
        </p>
        <button @click="sendResponse" class="send-answer-button" v-if="questionSent === false">
          Enviar
        </button>

        <button @click="nextQuestion" v-if="questionSent === true" class="next-question-button">
          Próxima pergunta
        </button>
      </div>
    </div>
  </div>
</template>

<style>
p,
h3,
button {
  font-family: 'Raleway', sans-serif;
}

.question-label {
  font-weight: 500;
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  width: 30rem;
  border: 0.5px solid black;
  border-radius: 5px;
}

.questions-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 5rem;
  align-self: center;
  justify-content: center;
}

.questions-container:last-child {
  margin-bottom: 2rem;
}

.button-container {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
}

.button-container button {
  border: 0;
  padding: 0.5rem 0;
  width: 13rem;
  font-size: 1rem;
  font-weight: 500;

  border-radius: 5px;
  margin-bottom: 1rem;
  transition: background-color ease 0.3s;
}

.send-answer-button {
  color: #fff;
  background-color: #50c878;
}

.send-answer-button:hover {
  background-color: #45b06c;
}

.send-answer-button:active {
  background-color: #3a945c;
}

.next-question-button {
  background-color: #f0f0f0;
  color: #353535;
}

.next-question-button:hover {
  background-color: #e2e2e2;
}

.next-question-button:active {
  background-color: #d4d4d4;
}
</style>
