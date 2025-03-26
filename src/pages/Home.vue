<script setup lang="ts">
import ScoreBoard from './components/Scoreboard.vue'
import QuestionsDisplay from './components/QuestionsDisplay.vue'
import type { QuestionAPI, Questions } from '../models/Questions'

import { ref, onMounted } from 'vue'
import { loadQuestions } from '../services/Questions'

var questionSent = ref(false)

// pergunta atual sendo exibida na tela
var currentQuestion = ref<Questions>({})

const sendResponse = () => {
  console.log('send answer')
  questionSent.value = true
}

// selecionar resposta

const answerSelected = ref('')

const toggleSelection = (answer: string) => {
  answerSelected.value = answer
}

// próxima pergunta

const nextQuestion = () => {
  console.log('press next question')
  handleScoreboard()
  loadNextQuestion()
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

//questions parser

const handleQuestionsParse = (questions: QuestionAPI[]): Questions[] => {
  const questionsParsed: Questions[] = questions.map((question) => ({
    ...question,
    answers_list: [
      ...question.incorrect_answers.map((incorrect) => decodeURIComponent(incorrect)),
      decodeURIComponent(question.correct_answer),
    ],
    question: decodeURIComponent(question.question),
    correct_answer: decodeURIComponent(question.correct_answer),
  }))
  return questionsParsed
}

// load questions

// lista de todas as perguntas
var questionsList = ref<Questions[]>([])
const error = ref('')
const isLoading = ref(false)

const fetchData = async () => {
  try {
    isLoading.value = true
    const response = await loadQuestions({ amount: 10 })
    const parsedQuestions = handleQuestionsParse(response.data.results)
    questionsList.value = parsedQuestions
    currentQuestion.value = parsedQuestions[Math.floor(Math.random() * questionsList.value.length)]
  } catch (err: any) {
    console.log(err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

// Chama a função quando o componente for montado
onMounted(fetchData)

// a funcao abaixo extrai a pergunta respondida do array de perguntas total, e coloca outra no lugar dela.

const loadNextQuestion = (): void => {
  // remover a pergunta respondida do array atual;
  const updatedQuestionsArray: Questions[] = questionsList.value.filter(
    (question) => question.question !== currentQuestion.value.question,
  )
  questionsList.value = updatedQuestionsArray
  currentQuestion.value =
    updatedQuestionsArray[Math.floor(Math.random() * updatedQuestionsArray.length)]
}
</script>

<template lang="">
  <div class="wrapper">
    <div class="container">
      <ScoreBoard :playerScore="playerScore" :computerScore="computerScore" />

      <QuestionsDisplay
        :answerSelected="answerSelected"
        :currentQuestion="currentQuestion"
        :questionSent="questionSent"
        :sendResponse="sendResponse"
        :nextQuestion="nextQuestion"
        :toggleSelection="toggleSelection"
      />
    </div>
  </div>
</template>

<style>
p,
h3,
button {
  font-family: 'Raleway', sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.container {
  width: 50rem;
  border: 0.5px solid black;
  border-radius: 5px;
}
</style>
