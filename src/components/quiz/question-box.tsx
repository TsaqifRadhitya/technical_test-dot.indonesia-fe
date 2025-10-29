import { useQuizz } from "@/hooks/useQuestion";
import { sanitizeText } from "@/utils/sanitize-text";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionBox() {
  const { questions, current_question_number } = useQuizz();
  const data = questions?.[current_question_number - 1];

  return (
    <div>
      {" "}
      <AnimatePresence mode="wait">
        {data && (
          <motion.h3
            key={data.question}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="md:text-lg text-gray-800"
          >
            <span className="font-semibold">
              Question {current_question_number}/{questions?.length}
            </span>{" "}
            : {sanitizeText(data.question)}
          </motion.h3>
        )}
      </AnimatePresence>
    </div>
  );
}
