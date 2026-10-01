import { ref, watch, type Ref } from 'vue'

export function useLocalStorage<T>(key: string, initialValue: T): Ref<T> {
  // 1. Попытка прочитать из localStorage
  const storedValue = localStorage.getItem(key)

  let parsedValue: T = initialValue
  if (storedValue) {
    try {
      parsedValue = JSON.parse(storedValue) as T
    } catch (error) {
      console.warn(`Ошибка парсинга localStorage для ключа "${key}":`, error)
      // Если JSON битый, остаемся на initialValue
    }
  }

  // 2. Создаем реактивную ссылку
  const state = ref<T>(parsedValue) as Ref<T>

  // 3. Следим за изменениями и сохраняем
  watch(
    state,
    (newValue) => {
      try {
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error(`Ошибка записи в localStorage для ключа "${key}":`, error)
      }
    },
    { deep: true }, // Важно для объектов и массивов, чтобы watch срабатывал при изменении вложенных свойств
  )

  return state
}
