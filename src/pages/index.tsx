import { useQuizz } from "@/hooks/useQuestion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function HomePage() {
  const [showModalResume, setShowModalResume] = useState<boolean>(false);
  const { initialize, start, isLoading, status } = useQuizz();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "onprocess") {
      setShowModalResume(true);
    } else {
      initialize();
    }
  }, []);

  const handleStart = () => {
    start();
    navigate("/quiz");
  };

  const handleResume = () => navigate("/quiz");

  const handleRestart = () => {
    setShowModalResume(false);
    initialize();
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[700px] h-[700px] bg-blue-200/30 rounded-full blur-3xl -top-40 -left-40"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl -bottom-40 -right-40"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Quiz App</span> 🧠
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
          Test your knowledge with fun, randomized questions. Challenge yourself
          and see how far you can go!
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            disabled={isLoading}
            onClick={handleStart}
            className="px-8 py-4 text-lg font-semibold rounded-xl shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:from-indigo-600 hover:to-blue-600 transition-all"
          >
            {isLoading ? <><Spinner /> Loading Questions...</> : "Start New Quiz"}
          </Button>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showModalResume && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Resume Previous Quiz?
              </h2>
              <p className="text-gray-600 mb-6">
                You have an unfinished quiz. Would you like to continue or start
                over?
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={handleRestart}
                  variant="destructive"
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
