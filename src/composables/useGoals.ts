import { computed, type ComputedRef, type Ref } from 'vue'
import { useLocalStorage } from './useLocalStorage'
import type { Goal, Step } from '@/types'

// Данные, которые приходят из формы создания цели (без id и createdAt)
export type NewGoal = Omit<Goal, 'id' | 'createdAt'>

const GOALS_KEY = 'goal-tracker:goals'
const STEPS_KEY = 'goal-tracker:steps'

export interface UseGoalsReturn {
  goals: Ref<Goal[]>
  steps: Ref<Step[]>
  addGoal: (data: NewGoal) => Goal
  deleteGoal: (id: string) => void
  addStep: (goalId: string, title: string) => Step | null
  toggleStep: (stepId: string) => void
  deleteStep: (stepId: string) => void
  getStepsForGoal: (goalId: string) => ComputedRef<Step[]>
  getGoalProgress: (goalId: string) => ComputedRef<number>
}

export function useGoals(): UseGoalsReturn {
  const goals = useLocalStorage<Goal[]>(GOALS_KEY, [])
  const steps = useLocalStorage<Step[]>(STEPS_KEY, [])

  // ---------- Цели ----------

  function addGoal(data: NewGoal): Goal {
    const goal: Goal = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    }
    goals.value.push(goal)
    return goal
  }

  function deleteGoal(id: string): void {
    goals.value = goals.value.filter((g) => g.id !== id)
    // Каскад: плоская структура позволяет удалить шаги одной строкой
    steps.value = steps.value.filter((s) => s.goalId !== id)
  }

  // ---------- Подзадачи ----------

  function addStep(goalId: string, title: string): Step | null {
    const goalExists = goals.value.some((g) => g.id === goalId)
    if (!goalExists) return null

    const step: Step = {
      id: crypto.randomUUID(),
      goalId,
      title: title.trim(),
      isCompleted: false,
    }
    steps.value.push(step)
    return step
  }

  function toggleStep(stepId: string): void {
    const step = steps.value.find((s) => s.id === stepId)
    if (!step) return

    step.isCompleted = !step.isCompleted
  }

  function deleteStep(stepId: string): void {
    steps.value = steps.value.filter((s) => s.id !== stepId)
  }

  // ---------- Производные ----------

  function getStepsForGoal(goalId: string): ComputedRef<Step[]> {
    return computed(() => steps.value.filter((s) => s.goalId === goalId))
  }

  function getGoalProgress(goalId: string): ComputedRef<number> {
    return computed(() => {
      const list = steps.value.filter((s) => s.goalId === goalId)
      if (list.length === 0) return 0

      const done = list.filter((s) => s.isCompleted).length
      return Math.round((done / list.length) * 100)
    })
  }

  return {
    goals,
    steps,
    addGoal,
    deleteGoal,
    addStep,
    toggleStep,
    deleteStep,
    getStepsForGoal,
    getGoalProgress,
  }
}
