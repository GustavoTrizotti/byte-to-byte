import { Product, Section } from "@/types";
import { useMemo } from "react";
import { DottedContainer } from "./dotted-container";
import { ProductList } from "../product-list";

type SectionContainerProps = {
  products: Product[];
  section: Section;
};

export function SectionContainer({ section, products }: SectionContainerProps) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.section === section);
  }, [products, section]);

  if (filteredProducts.length === 0) return null;

  return (
    <DottedContainer
      showDotAnimation={false}
      className="flex flex-col w-full h-auto bg-neutral-950 p-8 space-y-4"
    >
      <h1 className="text-2xl">{section}</h1>
      <ProductList products={filteredProducts} />
    </DottedContainer>
  );
}
