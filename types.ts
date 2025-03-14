import type { ElementType, ReactNode } from "react";
import type React from "react";

export type dataDash = {
  title: string;
  subtitle?: string;
  icon: ElementType;
  content?: string | React.FC | React.ComponentClass;
};
