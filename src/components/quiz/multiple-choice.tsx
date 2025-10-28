import type { MultipleChoiceType } from "@/types/multiple-choice";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useQuizz } from "@/hooks/useQuestion";
import { shuffleArray } from "@/utils/shuffleItemt";
import { sanitizeText } from "@/utils/sanitize-text";

const randomOptionPlacemenet = (
  option: string[],
  type: "multiple" | "boolean"
): MultipleChoiceType[] => {
  switch (type) {
    case "boolean":
      return [
        { display: "True", value: "True" },
        { display: "False", value: "False" },
      ];
    case "multiple":
      return shuffleArray<MultipleChoiceType>(
        option.map<MultipleChoiceType>((q) => ({
          display: sanitizeText(q),
          value: q,
        }))
      );
  }
};

export default function MultipleChoice() {
  const [chosen, setChosen] = useState<string | null>(null);
  const { questions, current_question_number, storeAnswer } = useQuizz();
  const data = questions?.[current_question_number - 1];

  const handleChoose = (value: string) => {
    setChosen(value);
    storeAnswer({ answer: value, question: data!.question });
  };

  useEffect(() => {
    setChosen(null);
  }, [current_question_number]);

  if (data) {
    const options = useMemo(()=>randomOptionPlacemenet(
      [...data.incorrect_answers, data.correct_answer],
      data.type
    ),[current_question_number]);

    return (
      <div className="flex flex-col gap-3 w-full h-fit">
        {options.map((opt, idx) => {
          const isSelected = chosen === opt.value;
          const isCorrect = opt.value === data.correct_answer;
          return (
            <motion.button
              key={idx}
              onClick={() => handleChoose(opt.value)}
              whileTap={{ scale: 0.98 }}
              disabled={!!chosen}
              className={cn(
                "text-left border rounded-md px-5 py-3 font-medium transition-colors duration-200",
                "bg-gray-50 hover:bg-blue-50 border-gray-300",
                isSelected && "bg-blue-100 border-blue-500",
                chosen &&
                  isSelected &&
                  !isCorrect &&
                  "bg-red-300 border-red-500 hover:bg-red-300",
                chosen &&
                  isCorrect &&
                  "bg-green-300 hover:bg-green-300 border-green-500",
                "cursor-pointer",
                "disabled:cursor-default"
              )}
            >
              {opt.display}
            </motion.button>
          );
        })}
      </div>
    );
  }
}
