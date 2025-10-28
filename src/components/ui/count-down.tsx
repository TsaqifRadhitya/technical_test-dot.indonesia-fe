import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface CountdownProps {
  startTime: Date;
  durationMinutes?: number;
  className?: string;
  showRemaining?: boolean;
  onFinish?: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
  startTime,
  durationMinutes = 60,
  className,
  showRemaining = false,
  onFinish,
}) => {
  const target = useMemo(
    () => new Date(startTime).getTime() + durationMinutes * 60 * 1000,
    [durationMinutes, startTime]
  );
  const [timeLeft, setTimeLeft] = useState(Math.max(0, target - Date.now()));

  useEffect(() => {
    if (timeLeft === 0) return;
    const interval = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, durationMinutes]);

  useEffect(() => {
    if (timeLeft === 0 && onFinish) {
      onFinish();
    }
  }, [timeLeft]);

  const totalMinutes = Math.floor(timeLeft / 1000 / 60);
  const totalSeconds = Math.floor((timeLeft / 1000) % 60);

  let colorClass = "border-green-400 text-green-600 bg-green-50";
  if (totalMinutes <= 3 && totalMinutes > 1)
    colorClass = "border-yellow-400 text-yellow-600 bg-yellow-50";
  if (totalMinutes <= 1) colorClass = "border-red-400 text-red-600 bg-red-50";

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      className={cn(
        "flex items-center justify-center w-fit px-4 py-2 rounded-xl border font-semibold text-lg transition-colors duration-500",
        colorClass,
        className
      )}
    >
      {pad(totalMinutes)}:{pad(totalSeconds)}
      {showRemaining && (
        <span className="ml-2 text-sm font-normal text-gray-500">
          remaining
        </span>
      )}
    </div>
  );
};

export default Countdown;
