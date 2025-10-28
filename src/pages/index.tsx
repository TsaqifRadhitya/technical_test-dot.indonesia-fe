import { useQuizz } from "@/hooks/useQuestion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [ShowModalResume, setShowModalResume] = useState<boolean>();
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to Quiz App
      </h1>
      <p className="text-gray-500 mb-10">
        Test your knowledge with random questions!
      </p>
      <Button
        onClick={handleStart}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Start New Quiz
      </Button>
      <AnimatePresence>
        {ShowModalResume && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Resume Previous Quiz?
              </h2>
              <p className="text-gray-600 mb-6">
                It looks like you have an unfinished quiz. Would you like to
                continue where you left off?
              </p>

              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setShowModalResume(false)}
                  variant={"destructive"}
                  className="px-4 py-2 rounded-lg transition"
                >
                  Start Over
                </Button>
                <Button
                  onClick={handleResume}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
