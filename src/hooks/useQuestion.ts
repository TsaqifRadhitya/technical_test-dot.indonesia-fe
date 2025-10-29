import { create } from "zustand"
import type { answerType, questionType, quizStatus, quizzGlobalState } from "../types/question"
import { quizzService } from '../services/quizz.service';

export const useQuizz = create<quizzGlobalState>((set) => {
    const QuizzService = new quizzService()
    let answers: answerType[] = []
    let questions: questionType[] | undefined = undefined
    let startTime: Date | undefined = undefined
    let status: quizStatus = "not started"
    let current_question_number: number = 1
    if (QuizzService.prevQuizzCheck()) {
        const data = QuizzService.index()
        answers = data.answers
        questions = data.questions
        startTime = data.startTime as Date
        status = data.status as quizStatus
        current_question_number = questions.length === answers.length ? answers.length : answers.length + 1
    }
    return {
        answers: answers,
        current_question_number: current_question_number,
        status: status,
        isLoading: false,
        startTime: startTime,
        questions: questions,
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
            QuizzService.finish()
            set({
                score: QuizzService.getScore(),
                status: "finish"
            })
        },
        start: () => {
            set({
                startTime: QuizzService.start(),
                status: "onprocess"
            })
        },
        quizResultCheck: () => {
            if (QuizzService.resultQuizCheck()) {
                const { answers, questions, startTime, status } = QuizzService.index()
                set({
                    answers: answers,
                    current_question_number: questions.length,
                    score: QuizzService.getScore(),
                    status: status as quizStatus,
                    questions: questions,
                    startTime: startTime,
                })
                return true
            }
            return false
        }
    }
})