import { brandImages } from "@/lib/brand-images";
import { Product } from "@/types";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TiltCard } from "./ui/tilt-card";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <TiltCard.Root>
      <div className="flex flex-1 w-full p-4 items-center">
        <TiltCard.Image src={brandImages[product.brand]} alt="Brand logo" />
      </div>
      <Separator />
      <div className="flex flex-1 w-full flex-col p-4 space-y-2 items-center justify-center">
        <TiltCard.Title>{product.name}</TiltCard.Title>
        <TiltCard.Subtitle>R$ {product.price.toFixed(2)}</TiltCard.Subtitle>
        <TiltCard.Subtitle>
          {product.used ? "Produto Usado" : "Produto Novo"}
        </TiltCard.Subtitle>
      </div>
    </TiltCard.Root>
  );
}
