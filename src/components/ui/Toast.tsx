import type { FC } from "react";
import type { TToastType } from "@/types/index.type";
import { cn } from "@/lib/utils";

interface IProps {
  type?: TToastType;
  children?: React.ReactNode;
}

export const Toast: FC<IProps> = ({
  type = "success",
  children = "Message...",
}) => {
  const getType = () => {
    switch (type) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      default:
        break;
    }
  };

  return (
    <div className={cn("alert alert-success", getType())}>
      <span>{children}</span>
    </div>
  );
};
