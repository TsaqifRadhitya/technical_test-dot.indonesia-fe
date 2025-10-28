import { useQuizz } from "@/hooks/useQuestion";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ResultPage() {
  const { status, quizResultCheck } = useQuizz();
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
  }, []);

  // const handleGoToHome = () => {
  //   reset();
  //   navigate("/");
  // };

  // const handleRestart = async () => {
  //   await restart();
  //   navigate("/quizz");
  // };

  return <></>;
}
