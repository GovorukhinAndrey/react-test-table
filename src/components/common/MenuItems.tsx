import type { FC } from "react";
import { NavLink } from "react-router";
import { ROUTER_LINKS, type TRouterLinksName } from "@/types/routers.type";

interface IProps {
  onClick?: () => void;
}

export const MenuItems: FC<IProps> = ({ onClick }) => {
  return (
    <>
      {Object.keys(ROUTER_LINKS).map((el) => (
        <li key={el}>
          <NavLink onClick={onClick} to={ROUTER_LINKS[el as TRouterLinksName]}>
            {el}
          </NavLink>
        </li>
      ))}
    </>
  );
};
