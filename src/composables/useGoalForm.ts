import { computed, reactive, toValue } from 'vue'
import { useFormField } from './useFormField'
import type { NewGoal } from './useGoals'
import type { Priority } from '@/types'

export function useGoalForm(onSubmit: (data: NewGoal) => void) {
  const todayDateString = new Date().toISOString().split('T')[0] || ''

  const fields = reactive({
    title: useFormField<string>('', (value) => {
      if (value.trim().length < 3) return 'Минимум 3 символа'
      return null
    }),
    description: useFormField<string>('', (value) => {
      if (value.trim().length < 10) return 'Минимум 10 символов'
      return null
    }),
    deadline: useFormField<string>('', (value) => {
      if (!value || value.trim() === '') return 'Укажите дату'
      if (value < todayDateString) return 'Дата не может быть в прошлом'
      return null
    }),
    priority: useFormField<Priority>('medium'),
  })

  const isFormValid = computed(() => {
    return Object.values(fields).every((field) => field.isValid)
  })

  function submit() {
    Object.values(fields).forEach((field) => field.validateField())

    if (!isFormValid.value) return

    const data: NewGoal = {
      title: toValue(fields.title.value),
      description: toValue(fields.description.value),
      deadline: toValue(fields.deadline.value),
      priority: toValue(fields.priority.value),
    }

    onSubmit(data)
    Object.values(fields).forEach((field) => field.reset())
    console.log('submit goal')
  }

  return {
    fields,
    isFormValid,
    submit,
  }
}
