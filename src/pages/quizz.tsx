import MultipleChoice from "@/components/quiz/multiple-choice";
import ProgressBar from "@/components/quiz/progress-bar";
import QuestionBox from "@/components/quiz/question-box";
import RestartQuizz from "@/components/quiz/restart-action";
import Timer from "@/components/quiz/timer";
import { useQuizz } from "@/hooks/useQuestion";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function QuizzPage() {
  const { status, questions, current_question_number, finish, isLoading } = useQuizz();
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
    if (!!questions && current_question_number === questions?.length) {
      finish();
      navigate("/result");
    }
  }, [current_question_number]);
  return (
    <section className="pt-28 px-10 lg:px-32 flex flex-col gap-y-5 min-h-screen w-full">
      {!isLoading && !!questions ? (
        <>
          <div className="flex justify-between items-center">
            <Timer />
            <RestartQuizz />
          </div>
          <ProgressBar />
          <QuestionBox />
          <MultipleChoice />
        </>
      ) : (
        <div className="flex justify-end mt-1.5 items-center">
          <RestartQuizz />
        </div>
      )}
    </section>
  );
}
