import { Button } from "../ui/button";
import { RotateCcwIcon } from "lucide-react";
import { useQuizz } from "../../hooks/useQuestion";
import { Spinner } from "../ui/spinner";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useState } from "react";

export default memo(function RestartQuizz() {
  const { restart, isLoading } = useQuizz();
  const [isOpen, setOpen] = useState(false);

  const handleRestart = async () => {
    setOpen(false);
    await restart();
  };

  return (
    <>
      <AnimatePresence>
        {(isOpen || isLoading) && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 text-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 18, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Restart Quiz?
              </h2>
              <p className="text-gray-600 mb-6">
                Starting over will erase your current progress. Are you sure you
                want to restart?
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setOpen(false)}
                  disabled={isLoading}
                  variant="default"
                  className="px-4 py-2 rounded-lg transition"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleRestart}
                  disabled={isLoading}
                  variant="destructive"
                  className="px-4 py-2"
                >
                  {isLoading ? (
                    <>
                      <Spinner className="mr-2" /> Restarting...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      >
        <Button
          disabled={isLoading}
          onClick={() => setOpen(true)}
          variant="destructive"
          className="flex items-center gap-2"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <RotateCcwIcon className="text-white w-4 h-4" />
          )}
          Restart
        </Button>
      </motion.div>
    </>
  );
})