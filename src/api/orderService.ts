import { apiClient } from "./apiClient";
import type { Order } from "../../types";

export const orderService = {
  getOrders: async (): Promise<Order[]> => {
    const response = await apiClient.get("/order");
    return response.data;
  },

  getOrdersDay: async (): Promise<Order[]> => {
    const response = await apiClient.get("/order?day=1");
    return response.data;
  },

  getOrdersMonth: async (): Promise<Order[]> => {
    const response = await apiClient.get("/order?days=30");
    return response.data;
  },
};
