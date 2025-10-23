export type questionType = {
    type: "multiple" | "boolean"
    difficulty: "easy" | "medium" | "hard"
    category: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

export type answerType = {
    question: string
    answer: string
}

export type quizzGlobalState = {
    questions?: questionType[]
    answers?: answerType[]
    startTime?: Date
    score?: number
    current_question_number: number
    storeAnswer: (data: answerType) => void
    reset: () => void
    previewQuizCheck: () => boolean
    loadPrevieus: () => void
    initialize: () => void
    start: () => void
    finish: () => void
}