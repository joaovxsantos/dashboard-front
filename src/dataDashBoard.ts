import type { dataDash } from "../types";

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
    content: "R$ 100.000,00",
  },
  {
    title: "Novos clientes",
    subtitle: "Novos clientes em 30 dias",
    icon: Users,
    content: "R$ 100.000,00",
  },
  {
    title: "Pedidos hoje",
    subtitle: "Total pedidos hoje",
    icon: Percent,
    content: "65",
  },
  {
    title: "Total pedidos",
    subtitle: "Total pedidos 30 dias",
    icon: Receipt,
    content: "235",
  },
  {
    title: "Overview vendas",
    icon: DollarSign,
    content: "graph",
  },
  {
    title: "Ultimos clientes",
    subtitle: "Novos clientes nas últimas 24horas",
    icon: CircleDollarSign,
    content: "card clientes",
  },
];
