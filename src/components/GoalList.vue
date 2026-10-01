<script setup lang="ts"></script>

<template>
  <!-- Фильтры -->
  <div class="filters">
    <label>
      Приоритет:
      <select>
        <option value="all" selected>Все</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </label>

    <label>
      Статус:
      <select>
        <option value="all" selected>Все</option>
        <option value="active">В процессе</option>
        <option value="completed">Завершённые</option>
      </select>
    </label>
  </div>

  <!-- Список карточек -->
  <div class="goal-list">
    <!-- Карточка 1 (выбранная) -->
    <article class="goal-card goal-card--selected">
      <header class="goal-card__header">
        <h3>Выучить Vue 3</h3>
        <button class="goal-card__remove" title="Удалить">×</button>
      </header>

      <p class="goal-card__desc">Пройти документацию и написать пет-проект</p>

      <div class="goal-card__progress">
        <div class="progress">
          <div class="progress__bar" style="width: 40%"></div>
        </div>
        <span class="progress__value">40%</span>
      </div>

      <footer class="goal-card__meta">
        <span>📅 2026-12-31</span>
        <span class="badge badge--high">High</span>
      </footer>
    </article>

    <!-- Карточка 2 -->
    <article class="goal-card">
      <header class="goal-card__header">
        <h3>Пробежать 100 км за месяц</h3>
        <button class="goal-card__remove" title="Удалить">×</button>
      </header>

      <p class="goal-card__desc">По 3–4 км в день с отдыхом по воскресеньям</p>

      <div class="goal-card__progress">
        <div class="progress">
          <div class="progress__bar" style="width: 75%"></div>
        </div>
        <span class="progress__value">75%</span>
      </div>

      <footer class="goal-card__meta">
        <span>📅 2026-10-30</span>
        <span class="badge badge--medium">Medium</span>
      </footer>
    </article>

    <!-- Карточка 3 -->
    <article class="goal-card">
      <header class="goal-card__header">
        <h3>Прочитать 5 книг</h3>
        <button class="goal-card__remove" title="Удалить">×</button>
      </header>

      <p class="goal-card__desc">По одной книге каждые две недели</p>

      <div class="goal-card__progress">
        <div class="progress">
          <div class="progress__bar" style="width: 100%"></div>
        </div>
        <span class="progress__value">100%</span>
      </div>

      <footer class="goal-card__meta">
        <span>📅 2026-06-01</span>
        <span class="badge badge--low">Low</span>
      </footer>
    </article>
  </div>
</template>
