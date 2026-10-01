import { ref, computed, type Ref, type ComputedRef } from 'vue'

// Интерфейс описывает контракт — что возвращает композабл.
// Это удобно для типизации в других местах (например, в useGoalForm).
export interface UseFormFieldReturn<T> {
  value: Ref<T>
  error: Ref<string | null>
  isValid: ComputedRef<boolean>
  validateField: () => void
  reset: () => void
}

// Функция-валидатор: принимает значение, возвращает текст ошибки или null
export type ValidatorFn<T> = (value: T) => string | null

export function useFormField<T>(initialValue: T, validate?: ValidatorFn<T>): UseFormFieldReturn<T> {
  // 1. Реактивное значение поля
  const value = ref<T>(initialValue) as Ref<T>

  // 2. Реактивное сообщение об ошибке
  const error = ref<string | null>(null)

  // 3. isValid — COMPUTED, а не ref.
  // Почему? Потому что это производное от error.
  // Если бы мы сделали это ref, пришлось бы синхронизировать два состояния вручную —
  // и рано или поздно они рассинхронизировались бы.
  const isValid = computed<boolean>(() => error.value === null)

  // 4. Принудительная валидация
  function validateField(): void {
    if (!validate) {
      // Если валидатор не передан — поле всегда валидно
      error.value = null
      return
    }
    error.value = validate(value.value)
  }

  // 5. Сброс к начальному состоянию
  function reset(): void {
    value.value = initialValue
    error.value = null
  }

  return {
    value,
    error,
    isValid,
    validateField,
    reset,
  }
}
