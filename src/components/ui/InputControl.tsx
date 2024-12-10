import { cn } from "@/lib/utils";
import { useState, type FC } from "react";

interface IProps {
  errorText?: string;
  className?: string;
  title?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const InputControl: FC<IProps> = ({
  title = "Title",
  placeholder = "Type here",
  errorText,
  className,
  name,
  value,
  onChange,
  isDisabled,
  defaultValue,
}) => {
  const [isError] = useState(false);

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label className={cn("form-control w-full", className)}>
      <div className="label">
        <span className="label-text text-lg">{title}</span>
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={isDisabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
      {isError && (
        <div className="label">
          <small className="label-text-alt text-error">{errorText}</small>
        </div>
      )}
    </label>
  );
};
