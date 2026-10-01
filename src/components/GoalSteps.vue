<script setup lang="ts"></script>

<template>
  <div class="step-panel">
    <h2>Выучить Vue 3</h2>
    <p class="step-panel__progress">Прогресс: 40%</p>

    <form class="step-panel__form">
      <input type="text" placeholder="Новая подзадача" />
      <button type="submit">+</button>
    </form>

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
  </div>

  <!-- Заглушка, когда цель не выбрана (можно оставить для проверки) -->
  <!--
        <p class="placeholder">Выберите цель, чтобы увидеть подзадачи</p>
        -->
</template>
