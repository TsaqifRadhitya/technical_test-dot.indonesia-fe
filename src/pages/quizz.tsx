import MultipleChoice from "@/components/quiz/multiple-choice";
import ProgressBar from "@/components/quiz/progress-bar";
import QuestionBox from "@/components/quiz/question-box";
import RestartQuizz from "@/components/quiz/restart-action";
import Timer from "@/components/quiz/timer";
import { useQuizz } from "@/hooks/useQuestion";
import { cn } from "@/lib/utils";
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
        <div className={cn("flex justify-between items-center",isLoading && "justify-end")}>
          {!isLoading && !!questions && <Timer />}
          <RestartQuizz />
        </div>
        {!isLoading && !!questions && (
          <>
            <ProgressBar />
            <QuestionBox />
            <MultipleChoice />
          </>
        )}
      </>
    </section>
  );
}
