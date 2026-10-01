<script setup lang="ts">
defineProps<{
  goalId: string | null
}>()
</script>

<template>
  <div v-if="!goalId">
    <p>Выберите цель, чтобы увидеть подзадачи</p>
  </div>
  <div v-else>
    <h2>Подзадачи для цели {{ goalId }}</h2>
    <p class="step-panel__progress">Прогресс: 40%</p>

    <ul class="step-list">
      <li class="step-list__item">
        <label>
          <input type="checkbox" checked />
          <span class="is-done">Прочитать раздел «Основы»</span>
        </label>
        <button class="step-list__remove" title="Удалить">×</button>
      </li>

      <li class="step-list__item">
        <label>
          <input type="checkbox" checked />
          <span class="is-done">Разобраться с Composition API</span>
        </label>
        <button class="step-list__remove" title="Удалить">×</button>
      </li>

      <li class="step-list__item">
        <label>
          <input type="checkbox" />
          <span>Написать пет-проект</span>
        </label>
        <button class="step-list__remove" title="Удалить">×</button>
      </li>

      <li class="step-list__item">
        <label>
          <input type="checkbox" />
          <span>Разобраться с Vue Router</span>
        </label>
        <button class="step-list__remove" title="Удалить">×</button>
      </li>

      <li class="step-list__item">
        <label>
          <input type="checkbox" />
          <span>Изучить Pinia</span>
        </label>
        <button class="step-list__remove" title="Удалить">×</button>
      </li>
    </ul>

    <form class="step-panel__form">
      <input type="text" placeholder="Новая подзадача" />
      <button type="submit">+</button>
    </form>
  </div>
</template>
