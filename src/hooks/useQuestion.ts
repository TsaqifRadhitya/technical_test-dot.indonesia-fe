import { create } from "zustand"
import type { quizzGlobalState } from "../types/question"
import { quizzService } from '../services/quizz.service';

export const useQuizz = create<quizzGlobalState>((set) => {
    const QuizzService = new quizzService()
    return {
        answers: [],
        current_question_number: 1,
        status: "not started",
        loadPrevieus: () => {
            const { answers, questions, startTime, status, } = QuizzService.index()
            set({
                answers: answers,
                current_question_number: answers.length + 1,
                questions: questions,
                startTime: startTime,
                status: status as string as any,
            })
        },
        previewQuizCheck: QuizzService.prevQuizzCheck,
        restart: async () => {
            const questions = await QuizzService.init()
            set({
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
                    return { ...prev, answers: prev.answers ? [...prev.answers, data] : [data] }
                })
            }, 500)
        },
        initialize: async () => {
            const questions = await QuizzService.init()
            set({
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