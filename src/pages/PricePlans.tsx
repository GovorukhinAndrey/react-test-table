import type { FC } from "react";
import { TitlePage } from "@/components/ui/TitlePage";
import { TablePricePlants } from "@/components/tables/TablePricePlants";

export const PricePlans: FC = () => {
  return (
    <>
      <TitlePage>Price Plants Table</TitlePage>
      <TablePricePlants />
    </>
  );
};
