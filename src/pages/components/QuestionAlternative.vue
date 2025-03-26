<script setup>
defineProps({
  answer: string,
  isCorrectAnswer: boolean,
})
// importando ref para simular um state
import { ref } from 'vue'

const isSelected = ref(false)

const toggleSelection = () => {
  isSelected.value = !isSelected.value
}
</script>

<template>
  <div
    class="container"
    @click="toggleSelection"
    v-bind:class="{ 'selected-container': isSelected }"
  >
    <p>{{ answer }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: center;
  background-color: #f0f0f0;
  width: 100%;
  border-radius: 0.325rem;
  height: 3rem;
}

.selected-container {
  background-color: #d4d4d4;
}
</style>
