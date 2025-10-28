import { Button } from "../ui/button";
import { RotateCcwIcon } from "lucide-react";
import { useQuizz } from "../../hooks/useQuestion";

export default function RestartQuizz() {
  const { restart, isLoading } = useQuizz();
  const handleRestart = async () => {
    await restart();
  };
  return (
    <>
      <Button
        disabled={isLoading}
        onClick={handleRestart}
        variant={"destructive"}
      >
        <RotateCcwIcon className="text-white" />
        Restart
      </Button>
    </>
  );
}
