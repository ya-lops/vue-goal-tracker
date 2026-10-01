<script setup lang="ts">
import { ref } from 'vue';
import GoalForm from './components/GoalForm.vue'
import GoalList from './components/GoalList.vue'
import GoalSteps from './components/GoalSteps.vue'

import { useGoals } from './composables/useGoals.ts';

const { goals, addGoal } = useGoals()

const currentGoalId = ref<string | null>(null)

function selectGoal(id: string) {
  currentGoalId.value = id
}
</script>

<template>
  <div class="app">
    <header class="app__header">
      <h1>Goal Tracker</h1>
    </header>

    <main class="app__layout">
      <aside class="app__panel app__panel--form">
        <GoalForm :on-submit="addGoal" />
      </aside>

      <section class="app__panel app__panel--list">
        <GoalList :goals="goals" :current-goal-id="currentGoalId" @select="selectGoal" />
      </section>

      <aside class="app__panel app__panel--steps">
        <GoalSteps v-if="currentGoalId" :key="currentGoalId" :goal-id="currentGoalId" />
        <template v-else>
          <p>Выберите цель</p>
        </template>
      </aside>
    </main>
  </div>
</template>

<style scoped></style>
