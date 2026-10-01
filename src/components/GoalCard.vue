<script setup lang="ts">
import type { Goal } from '@/types'
import Badge from './ui/Badge.vue'
import Progress from './ui/Progress.vue'

defineProps<{
  goal: Goal
  isSelected?: boolean
}>()
</script>

<template>
  <article class='goal-card' :class="{ '+selected': isSelected }" data-cmp="GoalCard">
    <header class="_header">
      <h3>{{ goal.title }}</h3>
      <button class="goal-card__remove" title="Удалить">×</button>
    </header>

    <p class="_desc">{{ goal.description }}</p>

    <div class="_progress">
      <Progress />
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
  transition:
    border-color 0.15s,
    background 0.15s;

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
