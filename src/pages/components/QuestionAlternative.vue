<script setup lang="ts">
defineProps<{
  answer: string
  correctAnswer: string
  answerSelected?: boolean
  onClickAnswer: (answer: string) => void
  isAnswered: boolean
}>()
</script>

<template>
  <div
    class="container"
    @click="onClickAnswer(answer)"
    v-bind:class="{
      'selected-container': answerSelected,
      'correct-color': correctAnswer === answer && isAnswered,
      'incorrect-color': answerSelected && answer !== correctAnswer && isAnswered,
    }"
  >
    <p>{{ answer }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  width: 100%;
  border-radius: 0.325rem;
  height: 50px;
  transition: background-color ease 0.3s;
}

.selected-container {
  background-color: #d4d4d4;
}

.correct-color {
  background-color: #60d088;
}

.incorrect-color {
  background-color: #e57373;
}

p,
h3 {
  font-family: 'Raleway', sans-serif;
}
</style>
