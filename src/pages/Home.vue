<script setup>
import ScoreBoard from './components/Scoreboard.vue'
import QuestionAlternative from './components/QuestionAlternative.vue'
</script>

<template lang="">
  <div class="wrapper">
    <div class="container">
      <ScoreBoard />
      <p class="question-label">Pergunta teste</p>
      <div class="questions-container">
        <QuestionAlternative title="oi" />
        <QuestionAlternative title="oi" />
        <QuestionAlternative title="oi" />
        <QuestionAlternative title="oi" />
      </div>
    </div>
  </div>
</template>

<style>
p,
h3 {
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
  padding: 2rem 5rem;
  gap: 0.5rem;
  align-self: center;
}
</style>
