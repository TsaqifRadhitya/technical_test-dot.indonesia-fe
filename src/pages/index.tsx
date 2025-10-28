import { useQuizz } from "@/hooks/useQuestion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const [ShowModalResume, setShowModalResume] = useState<boolean>(false);
  const { previewQuizCheck, initialize, loadPrevieus, start } = useQuizz();

  const navigate = useNavigate();

  useEffect(() => {
    if (previewQuizCheck()) {
      loadPrevieus();
      setShowModalResume(true);
    } else {
      initialize();
    }
  }, []);

  const handleStart = () => {
    start();
    navigate("/quizz");
  };

  const handleResume = () => {
    navigate("/quizz");
  };

  return <></>;
}
