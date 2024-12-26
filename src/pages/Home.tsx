import type { FC } from "react";
import { NavLink } from "react-router";
import { ROUTER_LINKS } from "@/types/routers.type";
import { TitlePage } from "@/components/ui/TitlePage";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/ui/Button";
import { TablePages } from "@/components/tables/TablePages";
import { TableProducts } from "@/components/tables/TableProducts";
import { TablePricePlants } from "@/components/tables/TablePricePlants";

export const Home: FC = () => {
  return (
    <>
      <TitlePage>Home</TitlePage>
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center mb-6">
        {Object.entries(ROUTER_LINKS)
          .filter(([key]) => key !== "Home")
          .map(([key, value]) => (
            <Card
              title={key}
              key={key}
              description={`Example of a table for ${value.toLowerCase()} data`}
            >
              <NavLink to={value}>
                <Button>Go to</Button>
              </NavLink>
            </Card>
          ))}
      </section>

      <h3 className="text-xl">Pages table</h3>
      <TablePages className="mt-4 mb-6" />

      <h3 className="text-xl">Products table</h3>
      <TableProducts className="mt-4 mb-6" />

      <h3 className="text-xl">Price Plants table</h3>
      <TablePricePlants className="mt-4 mb-6" />
    </>
  );
};
