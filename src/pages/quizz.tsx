import MultipleChoice from "@/components/quiz/multiple-choice";
import QuestionBox from "@/components/quiz/question-box";
import { useQuizz } from "@/hooks/useQuestion";
import type { MultipleChoiceType } from "@/types/multiple-choice";
import { shuffleArray } from "@/utils/shuffleItemt";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

const randomOptionPlacemenet = (
  option: string[],
  type: "multiple" | "boolean"
): MultipleChoiceType[] => {
  switch (type) {
    case "boolean":
      return [
        { display: "Benar", value: "True" },
        { display: "Salah", value: "False" },
      ];
    case "multiple":
      return shuffleArray<MultipleChoiceType>(
        option.map<MultipleChoiceType>((q) => ({ display: q, value: q }))
      );
  }
};

export default function QuizzPage() {
  const { status, storeAnswer, questions, current_question_number } =
    useQuizz();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    switch (status) {
      case "finish":
        navigate("/result");
        return;
      case "not started":
        navigate("/");
        return;
    }
  }, []);

  const data = questions?.[current_question_number - 1];
  if (data) {
    return (
      <>
        <QuestionBox question={data.question} />
        <MultipleChoice
          onChoose={(value) =>
            storeAnswer({ answer: value, question: data.question })
          }
          options={randomOptionPlacemenet([...data.incorrect_answers,data.correct_answer],data.type)}
          answer={data.correct_answer}
        />
      </>
    );
  }
}
