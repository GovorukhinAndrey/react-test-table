import { MenuItems } from "@/components/common/MenuItems";
import type { FC } from "react";
import { XCircleIcon } from "lucide-react";

interface IProps {
  onClose: () => void;
}

export const TheDrawer: FC<IProps> = ({ onClose }) => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu bg-base-200 min-h-full w-80 p-4 relative">
        <button className="absolute right-2 top-2" onClick={onClose}>
          <XCircleIcon />
        </button>
        <h2 className="mb-6 text-center text-lg">Tables - React Project</h2>
        <ul className="">
          <MenuItems onClick={onClose} />
        </ul>
      </div>
    </div>
  );
};
