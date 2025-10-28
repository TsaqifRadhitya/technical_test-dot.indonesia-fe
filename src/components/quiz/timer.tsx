import { useQuizz } from "@/hooks/useQuestion";
import Countdown from "../ui/count-down";
import { useState, useEffect } from "react";

export default function Timer() {
  const { startTime } = useQuizz();
  const [hasStartTime, setHasStartTime] = useState(false);

  useEffect(() => {
    if (startTime) setHasStartTime(true);
  }, [startTime]);

  return (
    <div className="flex justify-center items-center">
      {hasStartTime ? (
        <Countdown
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
