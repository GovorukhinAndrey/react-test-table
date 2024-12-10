import type { FC } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  text?: string;
  className?: string;
}

export const EmptyLoadedData: FC<IProps> = ({
  text = "No Results",
  className,
}: IProps) => {
  return (
    <div
      className={cn(
        "flex grow flex-col items-center justify-center py-6",
        className
      )}
    >
      <h4>{text}</h4>
    </div>
  );
};
