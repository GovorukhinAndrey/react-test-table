import type { FC } from "react";
import { TitlePage } from "@/components/ui/TitlePage";
import { TableProducts } from "@/components/tables/TableProducts";

export const Products: FC = () => {
  return (
    <>
      <TitlePage>Products Table</TitlePage>
      <TableProducts />
    </>
  );
};
