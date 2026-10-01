<script setup lang="ts"></script>

<template>
  <div class="progress" data-cmp="Progress">
    <div class="_bar">
      <div class="_bar-value" style="--_value: 75%"></div>
    </div>
    <div class="_value">75%</div>
  </div>
</template>

<style scoped>
.progress {
  display: flex;
  align-items: center;
  gap: 8px;

  ._bar {
    flex: 1;
    height: 6px;
    background: #2a3040;
    border-radius: 3px;
    overflow: hidden;

    ._bar-value {
      height: 100%;
      width: var(--_value);
      background: var(--accent);
      border-radius: inherit;
      transition: width 0.25s ease;
    }
  }

  ._value {
    font-size: 12px;
    color: var(--muted);
    min-width: 36px;
    text-align: right;
  }
}
</style>
