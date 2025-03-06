"use client";
import "./globals.css";

import { CreateProduct } from "@/components/create-product";
import { DottedContainer } from "@/components/layout/dotted-container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Sections } from "@/components/layout/sections";
import { Title } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    if (
      products.find(
        (p) =>
          p.name === product.name &&
          p.section === product.section &&
          p.brand === product.brand
      )
    ) {
      toast.error("Produto já cadastrado!");
    } else {
      const { id, ...rest } = product;
      const { id: lastProductId } = products[products.length - 1] || { id: 0 };
      setProducts((prev) => [...prev, { id: lastProductId + 1, ...rest }]);
      toast.success("Produto cadastrado com sucesso!");
    }
  };

  return (
    <div className="dark flex flex-col min-h-screen text-neutral-50 font-[family-name:var(--font-outfit)] overflow-auto">
      <DottedContainer className="flex flex-col items-center w-full">
        <Header />
        <Title hasProducts={products.length > 0} />
        <CreateProduct addProduct={addProduct} />
        <Sections products={products} />
      </DottedContainer>
      <Separator />
      <Footer />
    </div>
  );
}
