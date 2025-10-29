import { motion } from "framer-motion";
import { useQuizz } from "@/hooks/useQuestion";
import { cn } from "@/lib/utils";

export default function ProgressBar() {
  const { current_question_number, questions } = useQuizz();

  if (!!current_question_number && !!questions) {
    const total = questions!.length;
    const progress = ((current_question_number - 1) / total) * 100;
    return (
      <motion.div
        className="flex items-center gap-x-2.5 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          type: "tween",
        }}
      >
        <div className="flex-1 h-3 bg-white ring ring-blue-500 rounded-full overflow-hidden">
          <motion.div
            className={cn("h-full bg-blue-500")}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          />
        </div>
        <p className="w-10 text-primary font-semibold">{progress} %</p>
      </motion.div>
    );
  }
}
