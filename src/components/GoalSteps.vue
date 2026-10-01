<script setup lang="ts">
import { computed } from 'vue'
import { useGoals } from '@/composables/useGoals'
import { useStepForm } from '@/composables/useStepForm'

const props = defineProps<{
  goalId: string  // Теперь точно string, не null
}>()

const { getStepsForGoal, toggleStep, deleteStep, addStep } = useGoals()

const steps = computed(() => getStepsForGoal(props.goalId).value)

const progress = computed(() => {
  if (steps.value.length === 0) return 0
  const completed = steps.value.filter(s => s.isCompleted).length
  return Math.round((completed / steps.value.length) * 100)
})

const { fields, isFormValid, submit } = useStepForm(props.goalId, addStep)
</script>

<template>
  <div>
    <h2>Подзадачи</h2>
    <p class="step-panel__progress">Прогресс: {{ progress }}%</p>

    <ul v-if="steps.length > 0" class="step-list">
      <li v-for="step in steps" :key="step.id" class="step-list__item">
        <label>
          <input type="checkbox" :checked="step.isCompleted" @change="toggleStep(step.id)" />
          <span :class="{ 'is-done': step.isCompleted }">{{ step.title }}</span>
        </label>
        <button class="step-list__remove" title="Удалить" @click="deleteStep(step.id)">×</button>
      </li>
    </ul>
    <p v-else>Нет подзадач. Добавьте первую!</p>

    <form class="step-panel__form" @submit.prevent="submit">
      <!-- Вот здесь исправление: .value.value -->
      <input type="text" v-model="fields.title.value.value" placeholder="Новая подзадача" />
      <span v-if="fields.title.error.value" class="error">{{ fields.title.error.value }}</span>
      <button type="submit" :disabled="!isFormValid">+</button>
    </form>
  </div>
</template>