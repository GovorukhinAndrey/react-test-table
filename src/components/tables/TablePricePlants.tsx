import { useEffect, useState } from "react";
import type { IFilter } from "@/interfaces/index.interface";
import type { ITableBasic } from "@/interfaces/table-basic.interface";
import type {
  IPricePlantsData,
  IPricePlantsEditData,
} from "@/interfaces/price-plants-data.interface";
import { format } from "date-fns";
import { TableSection } from "@/components/common/TableSection";
import { useBasicAPI } from "@/hooks/useBasicAPI";

interface IProps {
  className?: string;
}

export const TablePricePlants = ({ className }: IProps) => {
  const { isLoading, getAll, updateItem, list } = useBasicAPI<
    IPricePlantsData,
    IPricePlantsEditData
  >({
    endpoint: "price-plants",
  });
  const [filter, setFilter] = useState<IFilter | null>(null);
  const [dataTable, setDataTable] = useState<ITableBasic>({
    columns: [
      {
        title: "ID",
        key: "id",
        width: 150,
      },
      {
        title: "Description",
        key: "description",
        width: 333,
      },
      {
        title: "Active",
        key: "active",
        width: 100,
      },
      {
        title: "Created At",
        key: "createdAt",
        width: 200,
      },
      {
        title: "Removed At",
        key: "removedAt",
        width: 200,
      },
    ],
    contentData: null,
  });

  const handleUpdate = async (id: number, body: IPricePlantsEditData) => {
    await updateItem(id, body);
    await getData();
  };

  const getData = async (f: IFilter | null = filter) => {
    const data = await getAll(f);

    if (data) {
      setDataTable({
        columns: dataTable.columns,
        contentData: data.map((el, idx) => ({
          key: idx.toString(),
          id: el.id,
          description: el.description,
          active: el.active ? "Yes" : "No",
          createdAt: format(el.createdAt, "dd MMM yyyy"),
          removedAt: format(el.removedAt, "dd MMM yyyy"),
        })),
      });
    }
  };

  const getEditData = (id: number): IPricePlantsEditData | null => {
    const result = list?.find((el) => el.id === id);
    if (!result) return null;

    return { description: result.description, active: result.active };
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableSection<IPricePlantsEditData>
      data={dataTable}
      isLoading={isLoading}
      classNameTable="min-w-[1150px]"
      className={className}
      onTryAgain={getData}
      onFilter={(f) => {
        setFilter(f);
        getData(f);
      }}
      onUpdate={(id, body) => handleUpdate(id, body)}
      getEditData={getEditData}
      fieldData={[
        { title: "Title", type: "text", stateKey: "title" },
        { title: "Active", type: "toggle", stateKey: "active" },
      ]}
    ></TableSection>
  );
};
