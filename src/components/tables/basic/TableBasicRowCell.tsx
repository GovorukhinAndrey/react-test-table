import type { FC } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

export const TableBasicRowCell: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full items-start justify-center p-4 font-medium",
        className
      )}
    >
      {children}
    </div>
  );
};
