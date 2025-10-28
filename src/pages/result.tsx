import { useQuizz } from "@/hooks/useQuestion";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router";

export default function ResultPage() {
  const { status, reset, restart } = useQuizz();
  const navigate = useNavigate();

  useEffect(() => {
    switch (status) {
      case "onprocess":
        navigate("/quizz");
        return;
      case "not started":
        navigate("/");
        return;
    }
  }, []);

  const handleGoToHome = () => {
    reset();
    navigate("/");
  };

  const handleRestart = async () => {
    await restart();
    navigate("/quizz");
  };

  return <></>;
}
