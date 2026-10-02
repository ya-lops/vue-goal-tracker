<script setup lang="ts">
import type { Goal } from '@/types'
import Badge from './ui/Badge.vue'
import Progress from './ui/Progress.vue'
import { useGoals } from '@/composables/useGoals.ts'

const { deleteGoal, getStepsForGoal } = useGoals()

defineProps<{
  goal: Goal
  isSelected?: boolean
  progress?: number
}>()

// FAQ
// Если надо добавить подтверждение на удаление, то это ведь не изменение самого deleteGoal, а надстройка
// в которой сам deleteGoal будет после подтерждения.
// то есть нужно по клику делать чтото типа confirm(deleteGoal(goal.id))
// да?
</script>

<template>
  <article class="goal-card" :class="{ '+selected': isSelected }" data-cmp="GoalCard">
    <header class="_header">
      <h3>{{ goal.title }}</h3>
      <button class="goal-card__remove" title="Удалить" @click="deleteGoal(goal.id)">×</button>
    </header>

    <p class="_desc">{{ goal.description }}</p>

    <div class="_progress" v-if="getStepsForGoal(goal.id).value.length > 0">
      <Progress :value="progress || 0" />
    </div>

    <footer class="_meta">
      <span>📅 {{ goal.deadline }}</span>
      <Badge :priority="goal.priority" />
    </footer>
  </article>
</template>

<style scoped>
.goal-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
  background: var(--panel-2);
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: var(--border-strong);
    background: #232834;
  }

  &.\+selected {
    border-color: var(--accent);
    background: var(--accent-soft);
  }

  ._header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 8px;

    & h3 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: var(--text);
    }
  }

  & ._desc {
    margin: 6px 0;
    font-size: 13px;
    color: var(--muted);
  }

  & ._progress {
    margin: 8px 0;
    opacity: 1;
    scale: 1;
    transition: all 0.215s;
    
    @starting-style {
      opacity: 0;
      scale: 0.5;
    }
  }

  & ._meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--muted);
  }
}
</style>
