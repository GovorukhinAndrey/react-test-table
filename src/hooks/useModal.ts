import { useState } from "react";

export const useModal = () => {
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsShowingModal(!isShowingModal);
  };

  return { isShowingModal, toggleModal };
};
