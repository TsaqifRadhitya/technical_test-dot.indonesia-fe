import type { answerType } from '@/types/question';
import { quizzRepository } from '../repository/quizz.repository';
export class quizzService {
    private quizzRepository = new quizzRepository()

    async init() {
        this.reset()
        return await this.quizzRepository.intialize()
    }

    index() {
        const questions = this.getQuestions()
        const answers = this.getAnswers()
        const startTime = this.quizzRepository.getStartTime()
        const status = this.quizzRepository.getQuizzStatus()
        return {
            questions,
            answers,
            status,
            startTime
        }
    }

    getScore() {
        const { questions, answers } = this.index()
        const trueAnswer = answers.filter((answer) => {
            const question = questions?.find((data) => data.question === answer.question)
            return question?.correct_answer === answer.answer
        })
        return (trueAnswer.length / questions.length) * 100
    }

    prevQuizzCheck() {
        const { questions, startTime, status } = this.index()
        const isAvailable = !!questions.length && !!startTime
        if (!isAvailable) {
            return false
        }

        if (status === "finish") {
            return false
        }

        if ((new Date()).getTime() - startTime.getTime() > 10 * 60 * 1000) {
            return false
        }
        return true
    }

    resultQuizCheck() {
        const { questions, startTime, status, answers } = this.index()
        return (startTime && questions.length === answers.length && status === "finish")
    }

    getQuestions() {
        return this.quizzRepository.getQuestions()
    }

    getAnswers() {
        return this.quizzRepository.getAnswers()
    }

    reset() {
        this.quizzRepository.deleteAllAnswers()
        this.quizzRepository.deleteAllQuestion()
        this.quizzRepository.deleteStartTime()
        this.quizzRepository.deleteStatus()
    }

    storeAnswer(answer: answerType) {
        const oldAnswer = this.getAnswers()
        this.quizzRepository.storeAnswer([...oldAnswer, answer])
    }

    finish() {
        this.quizzRepository.updateQuizzStatus("finish")
    }

    start() {
        const startTime = new Date()
        this.quizzRepository.updateQuizzStatus("onprocess")
        this.quizzRepository.storeStartTime(startTime)
        return startTime
    }
}