import type { dataDash} from "../types";
import { orderService } from "./api/orderService";
import { useService } from "./api/userService";

import {
  DollarSign,
  Users,
  Percent,
  Receipt,
  CircleDollarSign,
} from "lucide-react";

export const dataDashBoard: dataDash[]  = [
  {
    title: "Total vendas",
    subtitle: "Total vendas em 30 dias",
    icon: DollarSign,
    type: "order",
    content: async () => {
      return await orderService.getOrdersMonth();
    },
  },
  {
    title: "Novos clientes",
    subtitle: "Novos clientes em 30 dias",
    icon: Users,
    type: "user",
    content: async () => {
      return await useService.getUsersMonth();
    },
  },
  {
    title: "Pedidos hoje",
    subtitle: "Total pedidos hoje",
    icon: Percent,
    type: "order",
    content: async () => {
      return await orderService.getOrdersDay();
    },
  },
  {
    title: "Total pedidos",
    subtitle: "Total pedidos 30 dias",
    icon: Receipt,
    type: "order",
    content: async () => {
      return await orderService.getOrdersMonth();
    },
  },
  {
    title: "Overview vendas",
    icon: DollarSign,
  },
  {
    title: "Últimos clientes",
    subtitle: "Novos clientes nas últimas 24 horas",
    icon: CircleDollarSign,
    type: "user",
    content: async () => {
      return await useService.getUsersDay();
    },
  },
];
