import { baseRepository } from "./base.repository";
import type { answerType, questionType } from "@/types/question";
import { getRandomQuizzes } from "@/constants/quizz";

export class quizzRepository extends baseRepository {
    async intialize(): Promise<questionType[]> {
        const questions: questionType[] = await new Promise((resolve) => setTimeout(() => {
            resolve(getRandomQuizzes(10))
        }, 1000))
        this.setQuestions(questions);
        this.updateQuizzStatus("not started");
        return questions;
    }


    getStartTime(): Date | undefined {
        const startTime = this.getLocalStorage("start_time")
        if (!startTime) {
            return undefined
        }
        return new Date(startTime)
    }

    storeStartTime(start_time: Date) {
        this.setLocalStorage("start_time", start_time.toString())
    }

    deleteStartTime() {
        this.removeLocalStorage("start_time")
    }

    updateQuizzStatus(status: "onprocess" | "finish" | "not started") {
        this.setLocalStorage("quizz_status", status)
    }

    getQuizzStatus() {
        return this.getLocalStorage("quizz_status")
    }

    deleteStatus() {
        this.removeLocalStorage("quizz_status")
    }

    storeAnswer(answers: answerType[]) {
        this.setLocalStorage("answers", JSON.stringify(answers))
    }

    deleteAllAnswers() {
        this.removeLocalStorage("answers")
    }

    getAnswers(): answerType[] {
        if (!this.checkLocalStorage("answers")) {
            return []
        }
        const answers = JSON.parse(this.getLocalStorage("answers") as string)
        return answers
    }

    getQuestions(): questionType[] {
        if (!this.checkLocalStorage("questions")) {
            return []
        }
        const answers = JSON.parse(this.getLocalStorage("questions") as string)
        return answers
    }

    deleteAllQuestion() {
        this.removeLocalStorage("questions")
    }

    setQuestions(questions: questionType[]) {
        this.setLocalStorage("questions", JSON.stringify(questions))
    }
}