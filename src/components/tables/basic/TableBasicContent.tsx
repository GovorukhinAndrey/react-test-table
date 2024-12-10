import type { FC } from "react";
import type {
  ITableBasicColumn,
  ITableBasicContent,
} from "@/interfaces/table-basic.interface";
import { cn } from "@/lib/utils";
import { getAlignCSS, getWidthCSS } from "@/helpers";
import { TableBasicRowCell } from "./TableBasicRowCell";
import { Button } from "@/components/ui/Button";
import { SectionLoading } from "@/components/common/SectionLoading";
import { ErrorLoadData } from "@/components/common/ErrorLoadData";
import { EmptyLoadedData } from "@/components/common/EmptyLoadedData";

interface IProps {
  isAction?: boolean;
  className?: string;
  data: ITableBasicContent[] | null;
  columns: ITableBasicColumn[] | null;
  isLoading?: boolean;
  onTryAgain: () => void;
  onOpenModal: (id: number) => void;
}

export const TableBasicContent: FC<IProps> = ({
  className,
  data,
  isAction,
  isLoading,
  columns,
  onTryAgain,
  onOpenModal,
}) => {
  return (
    <div className={cn("flex flex-col justify-between", className)}>
      {isLoading ? (
        <SectionLoading className="h-[200px]" />
      ) : !data || !columns ? (
        <ErrorLoadData
          handleButtonTryAgain={onTryAgain}
          className="h-[200px]"
        />
      ) : data.length === 0 ? (
        <EmptyLoadedData className="h-[200px]" />
      ) : (
        <>
          {data.map((el) => (
            <div
              className="relative flex justify-between border-b input-bordered transition-colors last:border-0  hover:bg-base-content/10"
              key={el.key}
            >
              <>
                {columns.map((col) => (
                  <TableBasicRowCell
                    key={col.key}
                    className={cn(
                      getAlignCSS(col.align),
                      getWidthCSS(col.width),
                      col.className
                    )}
                  >
                    {el[col.key]}
                  </TableBasicRowCell>
                ))}
                {isAction && (
                  <TableBasicRowCell
                    key="default-basic-actions"
                    className="w-[100px] shrink-0"
                  >
                    <Button
                      onClick={() => onOpenModal(el.id as number)}
                      className="btn-sm"
                    >
                      Edit
                    </Button>
                  </TableBasicRowCell>
                )}
              </>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
