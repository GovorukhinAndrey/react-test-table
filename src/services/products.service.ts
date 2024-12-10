import type { IProductsData } from "@/interfaces/products-data.interface";
import { BaseApi } from "./base.service";
import { PRODUCTS } from "@/mocks/products.mock";

const data = PRODUCTS();

export class ProductsApi extends BaseApi<IProductsData, IProductsData> {
  constructor() {
    super();
    this.data = data;
  }
}
