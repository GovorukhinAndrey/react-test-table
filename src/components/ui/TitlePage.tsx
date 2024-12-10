import type { FC } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const TitlePage: FC<IProps> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "mb-2 text-3xl font-bold text-primary sm:mb-8 md:mb-10 md:text-4xl",
        className
      )}
    >
      {children}
    </h1>
  );
};
