<script lang="ts" setup>
defineProps<{
  playerScore: number
  computerScore: number
  restartGame: () => void
}>()
</script>

<template>
  <div class="container">
    <h1>Congratulations! You Finished the game!</h1>

    <h4 v-if="computerScore > playerScore">
      Unfortunately, you lost. But try again, i bet you'll win next time!
    </h4>
    <h4 v-if="playerScore > computerScore">
      Ayyyy you won!! Congratulations, you know a lot of stuff, huh?!
    </h4>
    <h4 v-if="computerScore === playerScore">
      Wow, it's a tie! play another one to settle this match!
    </h4>

    <button class="start-again-button" @click="restartGame">Start again</button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.25rem;
  font-weight: 500;
}

.start-again-button {
}

.start-again-button:hover {
  background-color: #e2e2e2;
}

.start-again-button:active {
  background-color: #d4d4d4;
}
</style>
