import type { FC } from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TType = "info" | "success" | "error" | "warning";

interface IProps {
  children: React.ReactNode;
  type?: TType;
  className?: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const Badge: FC<IProps> = ({
  children,
  type = "info",
  className,
  onClick,
  isDisabled,
}) => {
  let classType: string = "";

  switch (type) {
    case "info":
      classType = "badge-info";
      break;
    case "success":
      classType = "badge-success";
      break;
    case "warning":
      classType = "badge-warning";
      break;
    case "error":
      classType = "badge-error";
      break;

    default:
      break;
  }

  return (
    <div className={cn("badge badge-info gap-2", classType, className)}>
      {children}
      <button type="button" onClick={onClick} disabled={isDisabled}>
        <XIcon size={12}></XIcon>
      </button>
    </div>
  );
};
