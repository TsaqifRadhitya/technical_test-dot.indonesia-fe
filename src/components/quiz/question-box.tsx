import { useQuizz } from "@/hooks/useQuestion";
import { sanitizeText } from "@/utils/sanitize-text";

export default function QuestionBox() {
  const { questions, current_question_number } = useQuizz();
  const data = questions?.[current_question_number - 1];
  if (data) {
    return (
      <h3>
        <span className="font-semibold">
          Question {current_question_number}/{questions?.length}
        </span>{" "}
        : {sanitizeText(data!.question)}
      </h3>
    );
  }
}
