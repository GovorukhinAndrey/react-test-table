import type {
  IBasicData,
  IBasicEditData,
  IDefaultData,
} from "./index.interface";

export interface IPagesEditData extends IBasicEditData, IDefaultData {
  title: string;
}

export interface IPagesData extends IBasicData, IPagesEditData {
  readonly updatedAt: Date;
  readonly publishedAt: Date;
}
