<script setup lang="ts">
import GoalForm from './components/GoalForm.vue'
import GoalList from './components/GoalList.vue'
import GoalSteps from './components/GoalSteps.vue'

import { useGoals } from './composables/useGoals.ts';

const { addGoal } = useGoals()
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
        <GoalList />
      </section>

      <aside class="app__panel app__panel--steps">
        <GoalSteps />
      </aside>
    </main>
  </div>
</template>

<style scoped></style>
