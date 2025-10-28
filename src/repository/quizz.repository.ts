import axios from "axios";
import { baseRepository } from "./base.repository";
import type { answerType, questionType } from "@/types/question";

export class quizzRepository extends baseRepository {
    async intialize(): Promise<questionType[]> {
        const response = await axios.get("https://opentdb.com/api.php?amount=10");
        const questions: questionType[] = response.data.results;
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