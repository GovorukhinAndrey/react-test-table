import type { IFilter } from "@/interfaces/index.interface";
import { checkActiveFilter } from "@/helpers";

export interface IBaseApi {
  id: number;
}

export class BaseApi<T extends IBaseApi, E> {
  constructor(private delay: number = 1500, protected _data: T[] = []) {}

  private promiseGetData = (
    delay: number = 1500,
    data: T[] = this.data,
    reason: string = ""
  ) => {
    let timer: ReturnType<typeof setTimeout>;
    return new Promise(
      (resolve, reject) =>
        (timer = setTimeout(() => {
          if (!reason) return resolve(data);
          return reject(reason);
        }, delay))
    ).finally(() => clearTimeout(timer));
  };

  private getFilteredData = (filter: IFilter | null) => {
    if (!filter || !checkActiveFilter(filter)) {
      return this.data;
    }

    return this.data.filter((el) => {
      let activeFilter = true;
      if (typeof filter.active === "boolean" && "active" in el) {
        activeFilter = el.active === filter.active;
      }
      return Object.values(el).some(
        (el) =>
          activeFilter &&
          typeof el === "string" &&
          el.includes(filter.search ?? "")
      );
    });
  };

  get data(): T[] {
    return this._data;
  }

  set data(value: T[]) {
    this._data = value;
  }

  /**
   * @description get all data
   */
  public async getAll(
    filter: IFilter | null,
    delay: number = this.delay,
    reason: string = ""
  ): Promise<T[]> {
    const res = (await this.promiseGetData(
      delay,
      this.getFilteredData(filter),
      reason
    )) as T[];
    if (typeof res === "string") {
      throw res;
    }
    return res;
  }

  /**
   * @description creating
   */
  public async create(
    body: T,
    delay: number = this.delay,
    reason: string = ""
  ): Promise<T[]> {
    this.data = [...this.data, body];

    const res = (await this.promiseGetData(delay, this.data, reason)) as T[];
    if (typeof res === "string") {
      throw res;
    }
    return res;
  }

  /**
   * @description updating by id
   */
  public async update(
    id: number,
    body: E,
    delay: number = this.delay,
    reason: string = ""
  ): Promise<T[]> {
    this.data = this.data.map((el) => (el.id === id ? { ...el, ...body } : el));

    const res = (await this.promiseGetData(delay, this.data, reason)) as T[];
    if (typeof res === "string") {
      throw res;
    }
    return res;
  }

  /**
   * @description deleting by id
   */
  public async delete(
    id: number,
    delay: number = this.delay,
    reason: string = ""
  ): Promise<T[]> {
    this.data = this.data.filter((el: T) => el.id !== id);

    const res = (await this.promiseGetData(delay, this.data, reason)) as T[];
    if (typeof res === "string") {
      throw res;
    }
    return res;
  }
}
