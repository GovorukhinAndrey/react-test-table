import { useEffect, useState } from "react";
import type { IFilter } from "@/interfaces/index.interface";
import type { ITableBasic } from "@/interfaces/table-basic.interface";
import type {
  IProductsData,
  IProductsEditData,
} from "@/interfaces/products-data.interface";
import { format } from "date-fns";
import { TableSection } from "@/components/common/TableSection";
import { useBasicAPI } from "@/hooks/useBasicAPI";

interface IProps {
  className?: string;
}

export const TableProducts = ({ className }: IProps) => {
  const { isLoading, getAll, updateItem, list } = useBasicAPI<
    IProductsData,
    IProductsEditData
  >({
    endpoint: "products",
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
        title: "Name",
        key: "name",
        width: 333,
      },
      {
        title: "Active",
        key: "active",
        width: 100,
      },
      {
        title: "Options",
        key: "options",
        width: 200,
      },
      {
        title: "Created At",
        key: "createdAt",
        width: 200,
      },
    ],
    contentData: null,
  });

  const handleUpdate = async (id: number, body: IProductsEditData) => {
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
          name: el.name,
          options: (
            <div>
              <p>Size: {el.options.size}</p>
              <p>Amount: {el.options.amount}</p>
            </div>
          ),
          active: el.active ? "Yes" : "No",
          createdAt: format(el.createdAt, "dd MMM yyyy"),
        })),
      });
    }
  };

  const getEditData = (id: number): IProductsEditData | null => {
    const result = list?.find((el) => el.id === id);
    if (!result) return null;

    return { name: result.name, active: result.active };
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableSection<IProductsEditData>
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
        { title: "Name", type: "text", stateKey: "name" },
        { title: "Active", type: "toggle", stateKey: "active" },
      ]}
    ></TableSection>
  );
};
