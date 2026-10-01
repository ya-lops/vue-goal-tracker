import { computed } from 'vue'
import { useFormField } from './useFormField'
import type { NewGoal } from './useGoals'
import type { Priority } from '@/types'

export function useGoalForm() {
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)

  const fields = {
    title: useFormField<string>('', (value) => {
      if (value.trim().length < 3) {
        return 'Минимум 3 символа'
      }
      return null
    }),
    description: useFormField<string>('', (value) => {
      if (value.trim().length < 10) {
        return 'Минимум 10 символов'
      }
      return null
    }),
    date: useFormField<string>('', (value) => {
      if (new Date(value) < todayStart) {
        return 'Некорректная дата'
      }
      if (value === null || '') {
        return 'Укажите дату'
      }
      return null
    }),
    priority: useFormField<string>('medium', (value) => {
      return value
    }),
  }

  const isFormValid = computed(() => {
    return Object.values(fields).every((field) => field.isValid.value)
  })

  function submit(onSubmit: (data: NewGoal) => void) {
    Object.values(fields).every((field) => field.validateField())

    if (!isFormValid.value) return

    if (isFormValid.value) {
      const data: NewGoal = {
        title: fields.title.value,
        description: fields.description.value,
        deadline: fields.deadline.value,
        priority: fields.priority.value,
      }
    }
  }

  return {
    fields,
    isFormValid,
    submit,
  }
}
