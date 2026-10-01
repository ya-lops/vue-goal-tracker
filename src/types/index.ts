export type Priority = 'low' | 'medium' | 'high'

export interface Goal {
  id: string // или number, но string (например, crypto.randomUUID()) удобнее для фронтенда
  title: string
  description: string
  deadline: string // Храним как ISO-строку 'YYYY-MM-DD' для простоты работы с <input type="date"> и JSON
  priority: Priority
  createdAt: string // ISO-строка
}

export interface Step {
  id: string
  goalId: string // Связь с целью
  title: string
  isCompleted: boolean
}
