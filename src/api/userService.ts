import { apiClient } from "./apiClient";
import type { User } from "../../types";

export const useService = {
  getUsers: async (): Promise<User[]> => {
    const response = await apiClient.get("/users");
    return response.data;
  },

  getUsersDay: async (): Promise<User[]> => {
    const response = await apiClient.get("/users?day=1");
    return response.data;
  },

  getUsersMonth: async (): Promise<User[]> => {
    const response = await apiClient.get("/users?days=30");
    return response.data;
  },
};
