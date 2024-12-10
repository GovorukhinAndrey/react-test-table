import type { FC } from "react";
import { cn } from "@/lib/utils";

interface IProp {
  message?: string;
  className?: string;
  isLogo?: boolean;
}

export const SectionLoading: FC<IProp> = ({
  message = "Loading",
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex w-full flex-col items-center justify-center"
      )}
    >
      <span className="loading loading-ring loading-lg mb-2"></span>
      <h3 className="text-gray-300">{message}...</h3>
    </div>
  );
};
