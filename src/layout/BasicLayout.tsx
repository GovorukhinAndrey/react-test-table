import { useState, type FC } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import { TheHeader } from "./components/TheHeader";
import { TheFooter } from "./components/TheFooter";
import { TheDrawer } from "./components/TheDrawer";

export const BasicLayout: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="drawer h-screen">
      <input
        id="my-drawer-3"
        type="checkbox"
        checked={isOpenMenu}
        onChange={handleToggleMenu}
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        <TheHeader />

        {/* Page content here */}
        <main className="flex flex-col grow px-6 py-4">
          <Outlet></Outlet>
        </main>

        <TheFooter />
      </div>
      <TheDrawer onClose={handleToggleMenu} />
      <Toaster position="top-right" gutter={10} />
    </div>
  );
};
