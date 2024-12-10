import type {
  IDefaultData,
  IFieldData,
  IFilter,
} from "@/interfaces/index.interface";
import type { ITableBasic } from "@/interfaces/table-basic.interface";
import { DataManagementSection } from "@/components/common/DataManagementSection";
import { TableBasic } from "@/components/tables/basic/TableBasic";
import { cn } from "@/lib/utils";

interface IProps<T> {
  data: ITableBasic;
  isLoading?: boolean;
  classNameTable?: string;
  className?: string;
  onTryAgain: () => void;
  onFilter: (value: IFilter | null) => void;
  getEditData: (id: number) => T | null;
  onUpdate: (id: number, body: T) => void;
  fieldData: IFieldData[];
}

export const TableSection = <T extends IDefaultData>({
  data,
  isLoading,
  classNameTable,
  className,
  onTryAgain,
  onFilter,
  onUpdate,
  getEditData,
  fieldData,
}: IProps<T>) => {
  return (
    <section className={cn("flex flex-col w-full", className)}>
      <DataManagementSection onFilter={onFilter} isLoading={isLoading} />
      <TableBasic<T>
        data={data}
        isLoading={isLoading}
        minWidth={classNameTable}
        onTryAgain={onTryAgain}
        onUpdate={onUpdate}
        getEditData={getEditData}
        fieldData={fieldData}
      />
    </section>
  );
};
