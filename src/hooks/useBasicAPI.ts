import { useState } from "react";
import type { IFilter } from "@/interfaces/index.interface";
import type { TApiList } from "@/types/api.type";
import { useErrorSuccessToast } from "./useErrorSuccessToast";
import { PagesApi } from "@/services/pages.service";
import { PricePlantsApi } from "@/services/price-plants.service";
import { ProductsApi } from "@/services/products.service";
import { IBaseApi } from "@/services/base.service";

interface IProps {
  endpoint: TApiList;
}

export const useBasicAPI = <T extends IBaseApi, E>({ endpoint }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getError, getSuccess } = useErrorSuccessToast();
  const [list, setList] = useState<null | T[]>(null);
  const [item, setItem] = useState<null | T>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let api: any;
  switch (endpoint) {
    case "products":
      api = new ProductsApi();
      break;
    case "pages":
      api = new PagesApi();
      break;
    case "price-plants":
      api = new PricePlantsApi();
      break;

    default:
      break;
  }

  const getAll = async (
    filter: IFilter | null = null,
    delay: number = 1500,
    reason: string = ""
  ): Promise<T[] | null> => {
    try {
      setIsLoading(true);
      const data = await api.getAll(filter, delay, reason);
      setList(data);
      return data;
    } catch (error) {
      setList(null);
      getError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const createItem = async (
    body: T,
    delay: number = 1000,
    reason: string = ""
  ) => {
    try {
      setIsLoading(true);
      const res = await api.create(body, delay, reason);
      setItem(res);
      return res;
    } catch (error) {
      getError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateItem = async (
    id: number,
    body: E,
    delay: number = 1000,
    reason: string = "",
    isSuccessToast: boolean = true,
    successMessage: string | undefined = "The item has been updated"
  ) => {
    try {
      setIsLoading(true);
      const res = await api.update(id, body, delay, reason);
      setItem(res);
      getSuccess(successMessage, isSuccessToast);
      return res;
    } catch (error) {
      getError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async (
    id: number,
    isSuccessToast: boolean = true,
    successMessage: string | undefined = "The item has been deleted"
  ) => {
    try {
      setIsLoading(true);
      const res = await api.delete(id);
      getSuccess(successMessage, isSuccessToast);
      return res;
    } catch (error) {
      getError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getAll, createItem, updateItem, deleteItem, list, item };
};
