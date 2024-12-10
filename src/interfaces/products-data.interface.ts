import type { TSize } from "../types/index.type";
import type {
  IBasicData,
  IBasicEditData,
  IDefaultData,
} from "./index.interface";

export interface IProductsEditData extends IBasicEditData, IDefaultData {
  name: string;
}

export interface IProductsData extends IBasicData, IProductsEditData {
  readonly createdAt: Date;
  readonly options: IPricePlantsDataOptions;
}

interface IPricePlantsDataOptions {
  size: TSize;
  amount: number;
}
