import { useState, type FC } from "react";
import { cn } from "@/lib/utils";
import { checkActiveFilter } from "@/helpers";
import { Search } from "@/components/ui/Search";
import { Badge } from "@/components/ui/Badge";
import { ToggleControl } from "@/components/ui/ToggleControl";
import { useDebounce } from "@/hooks/useDebounce";
import type { IFilter } from "@/interfaces/index.interface";

interface IProps {
  className?: string;
  defaultFilter?: IFilter;
  isLoading?: boolean;
  onFilter: (value: IFilter | null) => void;
}

const getDefaultFilter = (): IFilter => ({
  search: "",
  active: null,
});

export const DataManagementSection: FC<IProps> = ({
  className,
  onFilter,
  isLoading,
  defaultFilter = getDefaultFilter(),
}) => {
  const [filter, setFilter] = useState<IFilter>(defaultFilter);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean>(
    checkActiveFilter(defaultFilter)
  );

  const debouncedRequest = useDebounce(() => {
    onFilter(filter);
  });

  const handleSearch = async (value: string) => {
    const data = { ...filter, search: value };
    setFilter(data);
    setIsActiveFilter(checkActiveFilter(data));

    debouncedRequest();
  };

  const handleActive = (value: boolean | null) => {
    const data = { ...filter, active: value };
    setFilter(data);
    setIsActiveFilter(checkActiveFilter(data));
    onFilter(data);
  };

  return (
    <section className={cn("mb-4", className)}>
      <div className="flex flex-wrap gap-2">
        <Search
          value={filter?.search ?? ""}
          onChange={handleSearch}
          className="max-w-[300px]"
          name="search"
          isDisabled={isLoading}
        ></Search>

        <ToggleControl
          title="Active"
          checked={filter?.active ?? false}
          onChange={handleActive}
          className="max-w-[150px]"
          isDisabled={isLoading}
        />
      </div>
      {isActiveFilter && (
        <div className="mt-2 flex flex-wrap gap-2">
          {filter?.search && (
            <Badge onClick={() => handleSearch("")} isDisabled={isLoading}>
              Search: {filter.search}
            </Badge>
          )}
          {typeof filter?.active === "boolean" && (
            <Badge onClick={() => handleActive(null)} isDisabled={isLoading}>
              Active: {filter.active ? "Yes" : "No"}
            </Badge>
          )}
        </div>
      )}
    </section>
  );
};
