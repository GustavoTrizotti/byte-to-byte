import { Brand } from "./brand";
import { Section } from "./section";

export type Product = {
  id: number;
  name: string;
  price: number;
  section: Section;
  brand: Brand;
  used: boolean;
};
