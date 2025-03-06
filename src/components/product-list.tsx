import { Product } from "@/types";
import { ProductCard } from "./product-card";

type ProductList = {
  products: Product[];
};

export function ProductList({ products }: ProductList) {
  return (
    <div
      id="product-list"
      className="grid grid-cols-4 gap-12 h-full place-items-center p-4"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
