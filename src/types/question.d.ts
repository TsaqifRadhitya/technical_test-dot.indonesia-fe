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
    status : "onprocess" | "finish" | "not started"
    isLoading : boolean
    storeAnswer: (data: answerType) => void
    restart: () => Promise<void>
    reset: () => void
    previewQuizCheck: () => boolean
    loadPrevieus: () => void
    initialize: () => Promise<void>
    start: () => void
    finish: () => void
}