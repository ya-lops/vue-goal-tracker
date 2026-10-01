import { ref, type Ref } from 'vue'

export function useSelectedGoal() {
  // 1. Создаем реактивную переменную.
  // Она может хранить строку (ID цели) или null (если ничего не выбрано).
  const selectedGoalId = ref<string | null>(null)

  // 2. Функция для явного выбора цели
  function selectGoal(id: string) {
    selectedGoalId.value = id
  }

  // 3. Функция для сброса (закрытия всех целей)
  function clearSelection() {
    selectedGoalId.value = null
  }

  // 4. Функция-переключатель (самая полезная для UI)
  // Если кликнули по уже открытой цели — закрываем её.
  // Если кликнули по новой — открываем её.
  function toggleGoal(id: string) {
    if (selectedGoalId.value === id) {
      // Уже открыта? Закрываем.
      selectedGoalId.value = null
    } else {
      // Закрыта или открыта другая? Открываем эту.
      selectedGoalId.value = id
    }

    // 💡 Продвинутый вариант этой же логики в одну строку (тернарный оператор):
    // selectedGoalId.value = selectedGoalId.value === id ? null : id
  }

  // 5. Возвращаем всё, что понадобится компонентам
  return {
    selectedGoalId,
    selectGoal,
    clearSelection,
    toggleGoal,
  }
}
