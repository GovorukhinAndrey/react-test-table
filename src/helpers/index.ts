import type { IFilter } from "@/interfaces/index.interface";
import type { TAlign, TWidth } from "@/types/index.type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getKeyByValue = (object: any, value: string) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const getAlignCSS = (value?: TAlign): string => {
  switch (value) {
    case "left":
      return "text-left";
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "";
  }
};

export const getWidthCSS = (value: TWidth = null): string => {
  if (value === null) return "";
  return `flex-[0_0_${value}px]`;
};

export const checkActiveFilter = (data: IFilter) => {
  return Object.values(data).some((el) => {
    if (typeof el === "boolean") {
      return true;
    }
    return !!el;
  });
};
