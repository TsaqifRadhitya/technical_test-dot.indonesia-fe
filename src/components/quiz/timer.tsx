import { useQuizz } from "@/hooks/useQuestion";
import Countdown from "../ui/count-down";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Timer() {
  const { startTime, finish } = useQuizz();
  const [hasStartTime, setHasStartTime] = useState(false);

  const navigate = useNavigate();

  const handleOnFinish = () => {
    finish();
    navigate("/result");
  };

  useEffect(() => {
    if (startTime) setHasStartTime(true);
  }, [startTime]);

  return (
    <div className="flex justify-center items-center">
      {hasStartTime ? (
        <Countdown
          onFinish={handleOnFinish}
          startTime={startTime as Date}
          durationMinutes={10}
          showRemaining
        />
      ) : (
        <span className="text-gray-400 text-sm italic">
          waiting for start...
        </span>
      )}
    </div>
  );
}
