import { type FC, useState } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IProps {
  errorText?: string;
  className?: string;
  name?: string;
  value: string;
  isDisabled?: boolean;
  onChange: (value: string) => void;
}

export const Search: FC<IProps> = ({
  errorText = "Error",
  className,
  name,
  value,
  onChange,
  isDisabled,
}) => {
  const [isError] = useState(false);

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <label
      className={cn("input input-bordered flex items-center gap-2", className)}
    >
      <input
        type="text"
        className="grow"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search"
        name={name}
        value={value}
        disabled={isDisabled}
      />
      <SearchIcon className="opacity-70"></SearchIcon>
      {isError && <small className="text-error">{errorText}</small>}
    </label>
  );
};
