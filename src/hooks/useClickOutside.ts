import { RefObject, useEffect, useState } from "react";

interface IProps {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
  addEventListener?: boolean;
}

export const useClickOutside = ({
  ref,
  callback,
  addEventListener = true,
}: IProps) => {
  const [isClick, setIsClick] = useState(false);
  const handleClickOutSide = (event: MouseEvent) => {
    if (!isClick) {
      setIsClick(true);
    } else if (
      ref.current &&
      !ref.current.contains(event.target as HTMLElement)
    ) {
      handleCallback();
    }
  };

  const handleCallback = (value: boolean = false) => {
    callback();
    setIsClick(value);
  };

  useEffect(() => {
    if (addEventListener) {
      document.addEventListener("click", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  });

  return { handleCallback };
};
