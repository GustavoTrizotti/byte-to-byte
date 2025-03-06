import { Product, Section } from "@/types";
import { SectionContainer } from "./section-container";

type SectionsProps = {
  products: Product[];
};

export function Sections({ products }: SectionsProps) {
  if (products.length === 0) return null;

  return Object.keys(Section).map((section) => {
    const currentSection = Section[section as keyof typeof Section];
    return (
      <SectionContainer
        key={currentSection}
        products={products}
        section={currentSection}
      />
    );
  });
}
