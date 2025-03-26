<script lang="ts" setup>
import { ref } from 'vue'
import type { Difficulty } from '../../models/Questions'

const props = defineProps<{
  onPressStart: (questionAmount: number, questionDifficulty: Difficulty) => void
}>()

var questionAmount = ref<number>(10)
var questionDifficulty = ref<Difficulty>('easy')

const handleQuestionAmountSelect = (number: number): void => {
  questionAmount.value = number
}

const handleQuestionDifficultySelect = (difficulty: Difficulty): void => {
  questionDifficulty.value = difficulty
}

const handleStartClick = (): void => {
  props.onPressStart(questionAmount.value, questionDifficulty.value)
}
</script>

<template>
  <div class="container">
    <h1>Welcome to the Trivia game!</h1>
    <h3>Choose the desired options below to start the game.</h3>

    <label for="">Number of questions</label>
    <div class="amount-container">
      <div
        class="question-amount-option"
        @click="handleQuestionAmountSelect(10)"
        v-bind:class="{
          'selected-container': questionAmount === 10,
        }"
      >
        10
      </div>
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionAmount === 20,
        }"
        @click="handleQuestionAmountSelect(20)"
      >
        20
      </div>
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionAmount === 30,
        }"
        @click="handleQuestionAmountSelect(30)"
      >
        30
      </div>
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionAmount === 40,
        }"
        @click="handleQuestionAmountSelect(40)"
      >
        40
      </div>
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionAmount === 50,
        }"
        @click="handleQuestionAmountSelect(50)"
      >
        50
      </div>
    </div>

    <label for="">Difficulty</label>

    <div class="amount-container">
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionDifficulty === 'easy',
        }"
        @click="handleQuestionDifficultySelect('easy')"
      >
        Easy
      </div>
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionDifficulty === 'medium',
        }"
        @click="handleQuestionDifficultySelect('medium')"
      >
        Medium
      </div>
      <div
        class="question-amount-option"
        v-bind:class="{
          'selected-container': questionDifficulty === 'hard',
        }"
        @click="handleQuestionDifficultySelect('hard')"
      >
        Hard
      </div>
    </div>

    <button @click="handleStartClick" class="start-button">Start game</button>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.start-button {
  color: #fff;
  background-color: #50c878;
}

.start-button:hover {
  background-color: #45b06c;
}

.start-button:active {
  background-color: #3a945c;
}

label {
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.amount-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-block: 1rem;
}

.question-amount-option {
  background-color: #f0f0f0;
  color: #353535;
  width: 5rem;
  height: 2rem;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
}

.question-amount-option:hover {
  background-color: #e2e2e2;
}

.question-amount-option:active {
  background-color: #d4d4d4;
}

.selected-container {
  background-color: #d4d4d4;
}

input {
}
</style>
