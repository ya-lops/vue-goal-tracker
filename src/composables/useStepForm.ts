import { computed, toValue } from 'vue'
import { useFormField } from './useFormField'
import type { NewStep } from './useGoals'

export function useStepForm(goalId: string, onSubmit: (data: NewStep) => void) {
  const fields = {
    title: useFormField<string>('', (value) => {
      if (value.trim().length < 2) {
        return 'Минимум 2 символа'
      }
      return null
    }),
  }

  const isFormValid = computed(() => {
    return Object.values(fields).every((field) => field.isValid.value)
  })

  function submit() {
    Object.values(fields).forEach((field) => field.validateField())

    if (!isFormValid.value) return

    const data: NewStep = {
      goalId: goalId,
      title: toValue(fields.title.value),
    }

    onSubmit(data)
    Object.values(fields).forEach((field) => field.reset())
  }

  return {
    fields,
    isFormValid,
    submit,
  }
}
