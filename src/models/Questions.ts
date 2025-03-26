export type Difficulty = 'easy' | 'medium' | 'hard'

export type QuestionAPI = {
  type: string
  difficulty: Difficulty
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export type Questions = {
  type: string
  difficulty: Difficulty
  category: string
  question: string
  correct_answer: string
  answers_list: string[]
}
