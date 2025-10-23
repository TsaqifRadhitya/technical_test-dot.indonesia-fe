import { create } from "zustand"
import type { answerType, questionType, quizzGlobalState } from "../types/question"
import axios from "axios"

export const useQuestion = create<quizzGlobalState>((set) => {
    const getSavedQuestions = (): questionType[] | undefined => {
        const questions = localStorage.getItem("questions")
        if (!questions) return undefined
        try {
            return JSON.parse(questions)
        } catch {
            return undefined
        }
    }

    const getStoredAnswer = (): answerType[] | undefined => {
        const answers = localStorage.getItem("answers")
        if (!answers) return undefined
        try {
            return JSON.parse(answers)
        } catch {
            return undefined
        }
    }

    const getStartTime = (): Date | undefined => {
        const startTime = localStorage.getItem("start_time")
        if (!startTime) return undefined
        try {
            return new Date(startTime)
        } catch {
            return undefined
        }
    }

    const resetHandler = () => {
        localStorage.removeItem("questions")
        localStorage.removeItem("answers")
        localStorage.removeItem("start_time")
    }

    const previewQuizCheck = (): boolean => {
        return !!getSavedQuestions() && !!getStartTime() && !!getSavedQuestions()
    }
    return {
        answers: undefined,
        current_question_number: 1,
        loadPrevieus: () => {
            const savedQuestions = getSavedQuestions() as questionType[]
            const storedAnswers = getStoredAnswer() as answerType[]
            const previewStartTime = getStartTime() as Date
            set({
                answers: storedAnswers,
                current_question_number: storedAnswers.length + 1,
                questions: savedQuestions,
                startTime: previewStartTime
            })
        },
        previewQuizCheck,
        reset: () => {
            resetHandler()
            set({
                answers: undefined,
                current_question_number: 1,
                questions: undefined,
                startTime: undefined
            })
        },
        storeAnswer: (data) => {
            set((prev) => ({ ...prev, answers: prev.answers ? [...prev.answers, data] : [data] }))
        },
        initialize: async () => {
            const request = await axios.get("https://opentdb.com/api.php?amount=10")
            const questions: questionType[] = request.data.results
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
                return {
                    score: (trueAnswer?.length ?? 0) / (prev.questions?.length ?? 0)
                }
            })
        },
        start: () => {
            set({
                startTime: new Date()
            })
        }
    }
})