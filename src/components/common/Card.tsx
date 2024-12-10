import type { FC } from "react";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Card: FC<IProps> = ({
  className,
  children,
  title = "Card Title",
  description = "If a dog chews shoes whose shoes does he choose?",
}) => {
  return (
    <div
      className={cn(
        "card bg-primary text-primary-content w-96 max-w-full",
        className
      )}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p>{description}</p>}
        {children && <div className="card-actions justify-end">{children}</div>}
      </div>
    </div>
  );
};
