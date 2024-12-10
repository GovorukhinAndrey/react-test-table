import { useState } from "react";
import { FormActionBlock } from "./FormActionBlock";
import { IDefaultData, IFieldData } from "@/interfaces/index.interface";
import { InputControl } from "../ui/InputControl";
import { ToggleControl } from "../ui/ToggleControl";

interface IProps<T> {
  data: T | null;
  onSubmit: (body: T) => void;
  children?: React.ReactNode;
  fieldData: IFieldData[];
}

export const ManageData = <T extends IDefaultData>({
  data,
  onSubmit,
  fieldData,
}: IProps<T>) => {
  const [state, setState] = useState(data);
  const [isPending, setIsPending] = useState(false);

  const handleReset = () => {
    setState(data);
  };

  const handleSubmit = async () => {
    if (!state) return false;
    setIsPending(true);
    await onSubmit(state);
    setIsPending(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
      }}
      className="flex flex-col gap-4"
    >
      {state &&
        fieldData.map((el, idx) => {
          if (el.type === "text") {
            return (
              <InputControl
                key={el.title + idx}
                value={state[el.stateKey] as string}
                title={el.title}
                isDisabled={isPending}
                onChange={(value) =>
                  setState({ ...state, [el.stateKey]: value })
                }
              />
            );
          }

          if (el.type === "toggle") {
            return (
              <ToggleControl
                key={el.title + idx}
                title={el.title}
                isDisabled={isPending}
                checked={state[el.stateKey] as boolean}
                onChange={(value) =>
                  setState({ ...state, [el.stateKey]: value })
                }
              />
            );
          }

          return null;
        })}

      <FormActionBlock
        onSubmit={handleSubmit}
        onReset={handleReset}
        isPending={isPending}
      />
    </form>
  );
};
