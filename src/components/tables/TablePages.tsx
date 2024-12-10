import { useEffect, useState } from "react";
import type { IFilter } from "@/interfaces/index.interface";
import type {
  IPagesData,
  IPagesEditData,
} from "@/interfaces/pages-data.interface";
import type { ITableBasic } from "@/interfaces/table-basic.interface";
import { format } from "date-fns";
import { TableSection } from "@/components/common/TableSection";
import { useBasicAPI } from "@/hooks/useBasicAPI";

interface IProps {
  className?: string;
}

export const TablePages = ({ className }: IProps) => {
  const { isLoading, getAll, updateItem, list } = useBasicAPI<
    IPagesData,
    IPagesEditData
  >({
    endpoint: "pages",
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
        title: "Title",
        key: "title",
        width: 333,
      },
      {
        title: "Active",
        key: "active",
        width: 100,
      },
      {
        title: "Updated At",
        key: "updatedAt",
        width: 200,
      },
      {
        title: "Published At",
        key: "publishedAt",
        width: 200,
      },
    ],
    contentData: null,
  });

  const handleUpdate = async (id: number, body: IPagesEditData) => {
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
          title: el.title,
          active: el.active ? "Yes" : "No",
          updatedAt: format(el.updatedAt, "dd MMM yyyy"),
          publishedAt: format(el.publishedAt, "dd MMM yyyy"),
        })),
      });
    }
  };

  const getEditData = (id: number): IPagesEditData | null => {
    const result = list?.find((el) => el.id === id);
    if (!result) return null;

    return { title: result.title, active: result.active };
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableSection<IPagesEditData>
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
