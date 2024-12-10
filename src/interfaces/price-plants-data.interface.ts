import type {
  IBasicData,
  IBasicEditData,
  IDefaultData,
} from "./index.interface";

export interface IPricePlantsEditData extends IBasicEditData, IDefaultData {
  description: string;
}

export interface IPricePlantsData extends IBasicData, IPricePlantsEditData {
  readonly createdAt: Date;
  readonly removedAt: Date;
}
