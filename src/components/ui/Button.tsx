import type { FC } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "submit" | "button";
}

export const Button: FC<IProps> = ({
  isLoading,
  children,
  onClick,
  className,
  isDisabled,
  type = "button",
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={cn("btn", className)}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          loading
        </>
      ) : (
        children ?? "Submit"
      )}
    </button>
  );
};
