import { cn } from "@/lib/utils";
import type { FC } from "react";

interface IProps {
  className?: string;
  title?: string;
  name?: string;
  onChange?: (value: boolean) => void;
  checked?: boolean;
  defaultValue?: string;
  isDisabled?: boolean;
}

export const ToggleControl: FC<IProps> = ({
  className,
  title = "Title",
  name,
  onChange,
  checked,
  defaultValue,
  isDisabled,
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={cn("form-control w-full", className)}>
      <label className="label cursor-pointer">
        <span className="label-text text-lg">{title}</span>
        <input
          type="checkbox"
          name={name}
          disabled={isDisabled}
          defaultValue={defaultValue}
          className="toggle"
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
