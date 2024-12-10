import type { FC } from "react";
import { TitlePage } from "@/components/ui/TitlePage";
import { TablePages } from "@/components/tables/TablePages";

export const Pages: FC = () => {
  return (
    <>
      <TitlePage>Page Table</TitlePage>
      <TablePages />
    </>
  );
};
