import MultipleChoice from "@/components/quiz/multiple-choice";
import ProgressBar from "@/components/quiz/progress-bar";
import QuestionBox from "@/components/quiz/question-box";
import RestartQuizz from "@/components/quiz/restart-action";
import Timer from "@/components/quiz/timer";
import { useQuizz } from "@/hooks/useQuestion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function QuizzPage() {
  const { status, questions, finish, isLoading, answers } = useQuizz();
  const navigate = useNavigate();
  useEffect(() => {
    switch (status) {
      case "finish":
        navigate("/result");
        return;
      case "not started":
        navigate("/");
        return;
    }
  }, []);

  useEffect(() => {
    if (!!questions && questions.length === answers?.length) {
      finish();
      navigate("/result");
    }
  }, [answers]);
  return (
    <section className="pt-28 px-10 lg:px-32 flex flex-col gap-y-5 min-h-screen w-full">
      <>
        <div className={cn("flex justify-between items-center")}>
          {isLoading && (
            <div className="animate-pulse rounded w-40 rounded-lg h-10 bg-primary/20"></div>
          )}
          {!isLoading && !!questions && <Timer />}
          <RestartQuizz />
        </div>

        {!isLoading && !!questions && (
          <div className="flex flex-col gap-y-5">
            <ProgressBar />
            <QuestionBox />
            <MultipleChoice />
          </div>
        )}
        {isLoading && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col gap-y-5"
          >
            <div className="flex gap-2 my-5">
              <div className="animate-pulse w-full rounded-full h-3 bg-primary/20"></div>
              <div className="animate-pulse w-10 rounded-full h-3 bg-primary/20"></div>
            </div>
            <div className="animate-pulse w-1/2 rounded-full h-3 bg-primary/20"></div>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="animate-pulse w-full rounded-lg h-12 bg-primary/20"
              ></div>
            ))}
          </motion.div>
        )}
      </>
    </section>
  );
}
