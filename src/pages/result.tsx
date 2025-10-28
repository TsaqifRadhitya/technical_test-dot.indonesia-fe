import { useQuizz } from "@/hooks/useQuestion";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sanitizeText } from "@/utils/sanitize-text";

export default function ResultPage() {
  const { status, quizResultCheck, restart, score, questions, answers,isLoading } =
    useQuizz();
  const navigate = useNavigate();

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

  const handleGoToHome = () => {
    navigate("/");
  };

  const handleRestart = async () => {
    await restart();
    navigate("/quiz");
  };

  return (
    <section className="px-10 lg:px-32 min-h-screen flex flex-col items-center">
      <div className="w-full h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          {isTimeout ? "⏰ Time's Up!" : "🎉 Quiz Finished!"}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {isTimeout
            ? "You ran out of time before finishing the quiz."
            : "Great job completing all questions!"}
        </p>
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-blue-600 mb-2">{score}</h2>
          <p className="text-gray-500">Your Final Score</p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Button
          disabled={isLoading}
            onClick={handleRestart}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Restart Quiz
          </Button>
          <Button disabled={isLoading} variant="secondary" onClick={handleGoToHome}>
            Back to Home
          </Button>
        </div>
      </div>
      <h1 className="w-full mb-1 text-primary font-bold text-2xl">
        Your Answers
      </h1>
      <div className="w-full h-px bg-primary mb-10" />
      <div className="space-y-4 w-full">
        {questions?.map((q, idx) => {
          const userAnswer = answers!.find(
            (a) => a.question === q.question
          )?.answer;
          const isCorrect = userAnswer === q.correct_answer;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={cn(
                "border rounded-xl p-4",
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
                  {userAnswer ?? "— (No Answer)"}
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
    </section>
  );
}
