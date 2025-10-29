import { useQuizz } from "@/hooks/useQuestion";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sanitizeText } from "@/utils/sanitize-text";
import { Spinner } from "@/components/ui/spinner";
import type { answerType, questionType } from "@/types/question";
import type { CombineType } from "@/types/combiner";
import { shuffleArray } from "@/utils/shuffleItemt";

export default function ResultPage() {
  const {
    status,
    quizResultCheck,
    restart,
    score,
    questions,
    answers,
    isLoading,
  } = useQuizz();
  const navigate = useNavigate();

  const [detailResult, setDetailResult] =
    useState<CombineType<questionType, answerType>>();

  useEffect(() => {
    if (!quizResultCheck()) {
      switch (status) {
        case "onprocess":
          navigate("/quiz");
          return;
        case "not started":
          navigate("/");
          return;
      }
    }
  }, [status]);

  const isTimeout = useMemo(() => {
    if (!questions) return false;
    return answers!.length < questions.length;
  }, [answers, questions]);

  const handleGoToHome = () => navigate("/");
  const handleRestart = async () => {
    await restart();
    navigate("/quiz");
  };

  return (
    <motion.section
      className="px-10 lg:px-32 pb-10 lg:pb-20 min-h-screen flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AnimatePresence>
        {detailResult && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDetailResult(undefined)}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-8 max-w-lg w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 text-center">
                Question Preview
              </h2>
              <p className="text-gray-700 font-medium mb-6">
                {sanitizeText(detailResult.question)}
              </p>
              <div className="space-y-3">
                {shuffleArray([
                  ...detailResult.incorrect_answers,
                  detailResult.correct_answer,
                ]).map((option, i) => {
                  const isUserAnswer = option === detailResult.answer;
                  const isCorrect = option === detailResult.correct_answer;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "p-3 rounded-lg border text-sm transition-all",
                        isCorrect
                          ? "bg-green-100 border-green-400 text-green-800"
                          : isUserAnswer && !isCorrect
                          ? "bg-red-100 border-red-400 text-red-800"
                          : "bg-gray-50 border-gray-200"
                      )}
                    >
                      {sanitizeText(option)}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="w-full h-[75vh] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          {isTimeout ? "⏰ Time's Up!" : "🎉 Quiz Finished!"}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {isTimeout
            ? "You ran out of time before finishing the quiz."
            : "Great job completing all questions!"}
        </p>

        <motion.div
          className="text-center mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-2">{score}</h2>
          <p className="text-gray-500">Your Final Score</p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            disabled={isLoading}
            onClick={handleRestart}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            {isLoading && <Spinner />}
            Restart Quiz
          </Button>
          <Button
            disabled={isLoading}
            variant="secondary"
            onClick={handleGoToHome}
          >
            Back to Home
          </Button>
        </motion.div>
      </motion.div>
      <motion.h1
        className="w-full mb-1 text-primary font-bold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        Your Answers
      </motion.h1>

      <motion.div
        className="w-full h-px bg-primary mb-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      />

      <div className="space-y-4 w-full">
        {questions?.map((q, idx) => {
          const userAnswer = answers!.find(
            (a) => a.question === q.question
          )?.answer;
          const isCorrect = userAnswer === q.correct_answer;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + idx * 0.05, duration: 0.3 }}
              onClick={() =>
                setDetailResult({ ...q, answer: userAnswer as string })
              }
              className={cn(
                "border rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition-all duration-200",
                isCorrect
                  ? "border-green-400 bg-green-50"
                  : "border-red-400 bg-red-50"
              )}
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {sanitizeText(q.question)}
              </h3>
              <p className="text-sm">
                Your answer:{" "}
                <span
                  className={cn(
                    "font-semibold",
                    isCorrect ? "text-green-600" : "text-red-600"
                  )}
                >
                  {userAnswer ? sanitizeText(userAnswer) : "— (No Answer)"}
                </span>
              </p>
              {!isCorrect && (
                <p className="text-sm text-gray-600">
                  Correct:{" "}
                  <span className="font-semibold text-green-700">
                    {q.correct_answer}
                  </span>
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
