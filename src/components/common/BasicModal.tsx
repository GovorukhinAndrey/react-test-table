import { cn } from "@/lib/utils";
import { useRef, type FC } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";

interface IProps {
  children?: React.ReactNode;
  childrenAction?: React.ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
  onReset?: () => void;
  isShow?: boolean;
  isActionBlock?: boolean;
  title?: string;
}

export const BasicModal: FC<IProps> = ({
  children,
  isShow,
  onClose,
  childrenAction,
  onSubmit,
  onReset,
  isActionBlock,
  title = "Title",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleOnClickOutside = (isDialog: boolean) => {
    if (onClose && isDialog) {
      onClose();
    }
  };

  if (!isShow) {
    return null;
  }

  return createPortal(
    <dialog
      className={cn("modal modal-open")}
      onClick={(e) => handleOnClickOutside(e.target === e.currentTarget)}
    >
      <div ref={ref} className="modal-box w-11/12 max-w-xl relative">
        <h3 className="font-bold text-lg">{title}</h3>
        {children ?? <p className="py-4">Click the button below to close</p>}
        {isActionBlock ? (
          <div className="modal-action flex gap-4">
            {childrenAction ? (
              childrenAction
            ) : (
              <div className="flex gap-2 grow">
                <Button className="btn-primary" onClick={onSubmit}>
                  Save
                </Button>
                <Button className="btn-secondary" onClick={onReset}>
                  Reset
                </Button>
              </div>
            )}
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <Button
            onClick={onClose}
            className="btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Button>
        )}
      </div>
    </dialog>,
    document.body
  );
};
