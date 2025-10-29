import { useQuizz } from "@/hooks/useQuestion";
import Countdown from "../ui/count-down";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {hasStartTime && (
          <motion.div
            key="countdown"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <Countdown
              onFinish={handleOnFinish}
              startTime={startTime as Date}
              durationMinutes={10}
              showRemaining
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
