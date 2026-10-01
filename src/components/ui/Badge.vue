<script setup lang="ts">
import type { Priority } from '@/types'

const props = defineProps<{
  priority: Priority
}>()

const priorityLabels: Record<Priority, string> = {
  low: 'Низкий',
  medium: 'Средний',
  high: 'Высокий',
}
</script>

<template>
  <span class="badge" :data-priority="priority" title="Приоритет">
    {{ priorityLabels[priority] }}
  </span>
</template>

<style scoped>
.badge {
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
}

[data-priority='low'] {
  background: rgba(43, 138, 91, 0.18);
  color: #6ee7a8;
}

[data-priority='medium'] {
  background: rgba(200, 150, 40, 0.18);
  color: #f0c674;
}

[data-priority='high'] {
  background: rgba(224, 49, 49, 0.18);
  color: #ff8a8a;
}
</style>
