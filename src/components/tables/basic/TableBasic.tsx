import { useState } from "react";
import type { ITableBasic } from "@/interfaces/table-basic.interface";
import { cn } from "@/lib/utils";
import { TableBasicHeader } from "./TableBasicHeader";
import { TableBasicContent } from "./TableBasicContent";
import { useModal } from "@/hooks/useModal";
import { BasicModal } from "@/components/common/BasicModal";
import { ManageData } from "@/components/common/ManageData";
import { IDefaultData, IFieldData } from "@/interfaces/index.interface";

interface IProps<T = IDefaultData> {
  className?: string;
  data: ITableBasic;
  isAction?: boolean;
  isLoading?: boolean;
  minWidth?: string;
  onTryAgain: () => void;
  getEditData: (id: number) => T | null;
  onUpdate: (id: number, body: T) => void;
  fieldData: IFieldData[];
}

export const TableBasic = <T extends IDefaultData>({
  className,
  data,
  isAction = true,
  isLoading,
  minWidth,
  onTryAgain,
  getEditData,
  onUpdate,
  fieldData,
}: IProps<T>) => {
  const { isShowingModal, toggleModal } = useModal();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setSelectedItem(id);
    toggleModal();
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    toggleModal();
  };

  const handleGetEditData = (): T | null => {
    if (!selectedItem) return null;
    return getEditData(selectedItem);
  };

  const handleSubmit = async (body: T) => {
    if (!selectedItem) return null;
    await onUpdate(selectedItem, body);
    handleCloseModal();
  };

  return (
    <div
      className={cn(
        "w-full max-w-full rounded-md border input-bordered flex flex-col overflow-x-auto",
        className
      )}
    >
      <TableBasicHeader
        data={data.columns}
        isAction={isAction}
        isLoading={isLoading}
        className={minWidth}
      />

      <TableBasicContent
        data={data.contentData}
        columns={data.columns}
        isAction={isAction}
        isLoading={isLoading}
        className={minWidth}
        onTryAgain={onTryAgain}
        onOpenModal={handleOpenModal}
      />
      <BasicModal
        title={`ID ${selectedItem}`}
        onClose={handleCloseModal}
        isShow={isShowingModal}
      >
        <div>
          <p>Editing a table row.</p>
        </div>
        <ManageData
          data={handleGetEditData()}
          onSubmit={handleSubmit}
          fieldData={fieldData}
        />
      </BasicModal>
    </div>
  );
};
