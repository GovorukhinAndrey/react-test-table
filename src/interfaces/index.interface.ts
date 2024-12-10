import type { TFormComponentType } from "@/types/index.type";

export interface IBasicData {
  readonly id: number;
}

export interface IBasicEditData {
  active: boolean;
}

export interface IFilter {
  search?: string;
  active?: boolean | null;
}

export interface IDefaultData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string | number | boolean | Date | any;
}

export interface IFieldData {
  title: string;
  type: TFormComponentType;
  stateKey: string;
  stateValue?: string;
}
