<script setup lang="ts">
import type { Goal } from '@/types'
import GoalCard from '@/components/GoalCard.vue'
import { useGoals } from '@/composables/useGoals'
import { computed } from 'vue'

const props = defineProps<{
  goals: Goal[]
  currentGoalId: string | null
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const { getGoalProgress } = useGoals()

const progressMap = computed(() => {
  const map = new Map<string, number>()

  props.goals.forEach((goal) => {
    map.set(goal.id, getGoalProgress(goal.id).value)
  })
  return map
})

// FAQ
// Нормально ли писать @click="emit('select', goal.id)" или надо выносить в скрипты emit('select', goal.id) ?
</script>

<template>
  <div class="goals" data-cmp="GoalList">
    <template v-if="goals.length === 0">
      <p>Нет целей. Создайте первую!</p>
    </template>
    <template v-else>
      <GoalCard
        v-for="goal in goals"
        :key="goal.id"
        :goal="goal"
        :is-selected="goal.id === currentGoalId"
        :progress="progressMap.get(goal.id) || 0"
        @click="emit('select', goal.id)"
      />
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
