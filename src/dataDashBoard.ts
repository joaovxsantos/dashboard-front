import type { dataDash } from "../types";
import { orderService } from "./api/orderService";
import { useService } from "./api/userService";

import {
  DollarSign,
  Users,
  Percent,
  Receipt,
  CircleDollarSign,
} from "lucide-react";

export const dataDashBoard: dataDash[] = [
  {
    title: "Total vendas",
    subtitle: "Total vendas em 30 dias",
    icon: DollarSign,
    type: "order",
    content: async () => {
      const response = await orderService.getOrdersMonth();
      return response;
    },
  },
  {
    title: "Novos clientes",
    subtitle: "Novos clientes em 30 dias",
    icon: Users,
    type: "user",
    content: async () => {
      const response = await useService.getUsersMonth();
      return response;
    },
  },
  {
    title: "Pedidos hoje",
    subtitle: "Total pedidos hoje",
    icon: Percent,
    type: "order",
    content: async () => {
      const response = await orderService.getOrdersDay();
      return response;
    },
  },
  {
    title: "Total pedidos",
    subtitle: "Total pedidos 30 dias",
    icon: Receipt,
    type: "order",
    content: async () => {
      const response = await orderService.getOrdersMonth();
      return response;
    },
  },
  {
    title: "Overview vendas",
    icon: DollarSign,
  },
  {
    title: "Ultimos clientes",
    subtitle: "Novos clientes nas últimas 24horas",
    icon: CircleDollarSign,
    type: "user",
    content: async () => {
      const response = await useService.getUsersDay();
      return response;
    },
  },
];
