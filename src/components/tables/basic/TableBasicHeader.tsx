import type { FC } from "react";
import type { ITableBasicHeaderCell } from "@/interfaces/table-basic.interface";
import { cn } from "@/lib/utils";
import { getAlignCSS, getWidthCSS } from "@/helpers";
import { TableBasicHeaderCell } from "./TableBasicHeaderCell";

interface IProps {
  data: ITableBasicHeaderCell[];
  isAction?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const TableBasicHeader: FC<IProps> = ({ isAction, data, className }) => {
  return (
    <div
      className={cn(
        "flex justify-between border-b input-bordered transition-colors",
        className
      )}
    >
      {data.map((el) => (
        <TableBasicHeaderCell
          key={el.key}
          title={el.title}
          className={cn(
            getAlignCSS(el.align),
            getWidthCSS(el.width),
            el.className
          )}
        />
      ))}
      {isAction && (
        <TableBasicHeaderCell
          key="default-basic-actions"
          title="Actions"
          className="w-[100px] shrink-0"
        />
      )}
    </div>
  );
};
