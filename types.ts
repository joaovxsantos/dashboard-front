import type { ElementType } from "react";
// import type React from "react";

export type dataDash = {
  title: string;
  subtitle?: string;
  icon: ElementType;
  type?: string;
  index?: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  content?: any;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  orders: [];
};

export type Order = {
  id: string;
  customerId: string;
  total: number;
  sale: boolean;
  createdAt: string;
  customer: object[];
};
