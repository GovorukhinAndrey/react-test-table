import type {
  IPricePlantsData,
  IPricePlantsEditData,
} from "@/interfaces/price-plants-data.interface";
import { BaseApi } from "./base.service";
import { PRICE_PLANTS } from "@/mocks/price-plants.mock";

const data = PRICE_PLANTS();

export class PricePlantsApi extends BaseApi<
  IPricePlantsData,
  IPricePlantsEditData
> {
  constructor() {
    super();
    this.data = data;
  }
}
