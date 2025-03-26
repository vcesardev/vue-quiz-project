import type { AxiosResponse } from 'axios'
import type { QuestionAPI } from '../models/Questions'
import { get } from './api'

type QuestionPayloadParams = {
  difficulty?: 'easy' | 'medium' | 'hard'
  amount: number
}

type LoadQuestionsResponse = {
  response_code: number
  results: QuestionAPI[]
}

export const loadQuestions = (
  params?: QuestionPayloadParams,
): Promise<AxiosResponse<LoadQuestionsResponse>> =>
  get({ params: { ...params, type: 'multiple', encode: 'url3986' } })
