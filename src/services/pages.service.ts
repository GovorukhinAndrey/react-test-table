import type {
  IPagesData,
  IPagesEditData,
} from "@/interfaces/pages-data.interface";
import { BaseApi } from "./base.service";
import { PAGES } from "@/mocks/pages.mock";

const data = PAGES();

export class PagesApi extends BaseApi<IPagesData, IPagesEditData> {
  constructor() {
    super();
    this.data = data;
  }
}
