<script setup lang="ts">
import type { Goal } from '@/types'
import GoalCard from '@/components/GoalCard.vue'

defineProps<{
  goals: Goal[]
  currentGoalId: string | null
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>

<template>
  <div class="goals" data-cmp="GoalList">
    <template v-if="goals.length === 0">
      <p>Нет целей. Создайте первую!</p>
    </template>
    <template v-else>
      <GoalCard v-for="goal in goals" :key="goal.id" :goal="goal" :is-selected="goal.id === currentGoalId"
        @click="emit('select', goal.id)" />
    </template>
  </div>
</template>

<style scoped>
.goals {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
