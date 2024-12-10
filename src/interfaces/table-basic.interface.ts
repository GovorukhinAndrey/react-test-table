import { TAlign, TWidth } from "@/types/index.type";

export interface ITableBasic {
  columns: ITableBasicColumn[];
  contentData: null | ITableBasicContent[];
}

export interface ITableBasicHeaderCell {
  title: string | React.ReactElement;
  key: string;
  width?: TWidth;
  align?: TAlign;
  className?: string;
}

export interface ITableBasicColumn extends ITableBasicHeaderCell {
  alignContent?: TAlign;
  classNameContent?: string;
}

export interface ITableBasicContent {
  [key: string]: React.ReactNode;
  key: string;
}
