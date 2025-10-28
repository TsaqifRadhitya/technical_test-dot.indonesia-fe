import { create } from "zustand"
import type { quizzGlobalState } from "../types/question"
import { quizzService } from '../services/quizz.service';

export const useQuizz = create<quizzGlobalState>((set) => {
    const QuizzService = new quizzService()
    return {
        answers: [],
        current_question_number: 1,
        status: "not started",
        isLoading: false,
        loadPrevieus: () => {
            set({ isLoading: true })
            const { answers, questions, startTime, status, } = QuizzService.index()
            set({
                isLoading: false,
                answers: answers,
                current_question_number: questions.length === answers.length ? answers.length : answers.length + 1,
                questions: questions,
                startTime: startTime,
                status: status as string as any,
            })
        },
        previewQuizCheck: () => QuizzService.prevQuizzCheck(),
        restart: async () => {
            set({ isLoading: true })
            const questions = await QuizzService.init()
            set({
                isLoading: false,
                answers: [],
                current_question_number: 1,
                questions: questions,
                startTime: QuizzService.start(),
                status: "onprocess"
            })
        },
        reset: () => {
            QuizzService.reset()
            set({
                answers: [],
                questions: undefined,
                current_question_number: 1,
                status: "not started",
                startTime: undefined
            })
        },
        storeAnswer: (data) => {
            setTimeout(() => {
                set((prev) => {
                    QuizzService.storeAnswer(data)
                    const { current_question_number, questions } = prev
                    return { ...prev, current_question_number: questions?.length === current_question_number ? current_question_number : current_question_number + 1, answers: prev.answers ? [...prev.answers, data] : [data] }
                })
            }, 500)
        },
        initialize: async () => {
            set({
                answers: [],
                questions: undefined,
                startTime: undefined,
                current_question_number: 1,
                status: "not started",
                isLoading: true
            })
            const questions = await QuizzService.init()
            set({
                isLoading: false,
                questions: questions
            })
        },
        finish: () => {
            set((prev) => {
                const trueAnswer = prev.answers?.filter((answer) => {
                    const question = prev.questions?.find((data) => data.question === answer.question)
                    return question?.correct_answer === answer.question
                })
                QuizzService.finish()
                return {
                    score: (trueAnswer?.length ?? 0) / (prev.questions?.length ?? 0),
                    status: "finish"
                }
            })
        },
        start: () => {
            set({
                startTime: QuizzService.start(),
                status: "onprocess"
            })
        }
    }
})