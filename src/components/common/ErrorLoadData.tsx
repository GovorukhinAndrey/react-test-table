import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface IProps {
  message?: string;
  handleButtonTryAgain: () => void;
  className?: string;
}

export const ErrorLoadData: FC<IProps> = ({
  handleButtonTryAgain,
  message = "The data did not load",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-6",
        className
      )}
    >
      <h4>{message}</h4>
      <Button className="mt-2" onClick={handleButtonTryAgain}>
        Try again
      </Button>
    </div>
  );
};
