<script lang="ts" setup>
defineProps<{
  playerScore: number
  computerScore: number
  questionsLeft: number
}>()
</script>

<template lang="">
  <div class="question-container">
    <div class="scoreboard">
      <h3 class="player-name">Player</h3>
      <p class="player-score">{{ playerScore }}</p>
      <h4>-</h4>
      <p class="player-score">{{ computerScore }}</p>
      <h3 class="player-name">Computer</h3>
    </div>
    <span>Questions left: {{ questionsLeft }}</span>
  </div>
</template>

<style scoped>
.question-container {
  background-color: #50c878;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 2rem 0;
}

.scoreboard {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  text-align: center;
  margin-left: 1.5rem;
}

.player-name {
  font-size: 1rem;
}

.player-score {
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #d0f0c0;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
}
</style>
