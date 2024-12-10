import type { FC } from "react";
import type { ITableBasicHeaderCell } from "@/interfaces/table-basic.interface";
import { cn } from "@/lib/utils";

export const TableBasicHeaderCell: FC<ITableBasicHeaderCell> = ({
  title = "Title",
  className,
}) => {
  return (
    <div
      className={cn(
        "h-14 w-full items-center px-4 font-medium text-muted-foreground flex text-lg",
        className
      )}
    >
      {title}
    </div>
  );
};
