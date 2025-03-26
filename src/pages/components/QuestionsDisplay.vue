<script setup lang="ts">
import type { Questions } from '../../models/Questions'
import QuestionAlternative from './QuestionAlternative.vue'

defineProps<{
  answerSelected: string
  currentQuestion: Questions
  toggleSelection: (answer: string) => void
  questionSent: boolean
  sendResponse: () => void
  nextQuestion: () => void
}>()
</script>

<template>
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
      ✅ Right answer!!! ✅
    </p>
    <p v-if="questionSent === true && answerSelected !== currentQuestion.correct_answer">
      ❌ Wrong answer!!! ❌
    </p>
    <button @click="sendResponse" class="send-answer-button" v-if="questionSent === false">
      Send
    </button>

    <button @click="nextQuestion" v-if="questionSent === true" class="next-question-button">
      Next question
    </button>
  </div>
</template>

<style>
.question-label {
  font-weight: 500;
  text-align: center;
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

/* .button-container button {
  border: 0;
  padding: 0.5rem 0;
  width: 13rem;
  font-size: 1rem;
  font-weight: 500;

  border-radius: 5px;
  margin-bottom: 1rem;
  transition: background-color ease 0.3s;
} */

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
