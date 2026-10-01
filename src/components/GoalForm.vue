<script setup lang="ts"></script>

<template>
  <form class="goal-form">
    <h2>Новая цель</h2>

    <label>
      Название
      <input type="text" placeholder="Например: Выучить Vue 3" />
    </label>

    <label>
      Описание
      <textarea rows="3" placeholder="Кратко о цели"></textarea>
    </label>

    <label>
      Дедлайн
      <input type="date" />
    </label>

    <label>
      Приоритет
      <select>
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>
    </label>

    <button type="submit">Создать</button>
  </form>
</template>
