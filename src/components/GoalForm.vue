<script setup lang="ts">
import { useGoalForm } from '@/composables/useGoalForm'
import type { NewGoal } from '@/composables/useGoals'

const props = defineProps<{
  onSubmit: (data: NewGoal) => void
}>()

const { fields, isFormValid, submit } = useGoalForm(props.onSubmit)
</script>

<template>
  <form class="goal-form">
    <h2>Новая цель</h2>

    <div>
      <label>
        Название
        <input type="text" v-model="fields.title.value" @blur="fields.title.validateField" />
      </label>
      <span v-if="fields.title.error" class="field-error-message">{{ fields.title.error }}</span>
    </div>

    <div>
      <label>
        Описание
        <textarea v-model="fields.description.value" @blur="fields.description.validateField"></textarea>
      </label>
      <span v-if="fields.description.error" class="field-error-message">{{ fields.description.error }}</span>
    </div>

    <div>
      <label>
        Дедлайн
        <input type="date" v-model="fields.deadline.value" @blur="fields.deadline.validateField"
          @input="console.log('Дата:', fields.deadline.value)" />
      </label>
      <span v-if="fields.deadline.error" class="field-error-message">{{ fields.deadline.error }}</span>
    </div>

    <div>
      <label>
        Приоритет
        <select v-model="fields.priority.value">
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </select>
      </label>
    </div>

    <button type="button" @click="submit" :disabled="!isFormValid">Создать</button>
  </form>
</template>
