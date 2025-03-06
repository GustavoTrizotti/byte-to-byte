"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Brand, Product, Section } from "@/types";
import {
  BadgeCheck,
  CircleDollarSign,
  PackagePlus,
  RefreshCcw,
  Shapes,
  ShoppingBasket,
  Type,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type CreateProductProps = {
  addProduct: (product: Product) => void;
};

export function CreateProduct({ addProduct }: CreateProductProps) {
  const [product, setProduct] = useState<Product>({
    id: 0,
    brand: Brand.HP,
    section: Section.Computadores,
    name: "",
    price: 0,
    used: false,
  });

  const resetProduct = () => {
    setProduct({
      id: 0,
      brand: Brand.HP,
      section: Section.Computadores,
      name: "",
      price: 0,
      used: false,
    });
  };

  const handleSaveProduct = (product: Product) => {
    if (!product.name) {
      toast.error("Nome do produto é obrigatório!");
      return;
    }

    if (!product.price) {
      toast.error("Preço do produto é obrigatório!");
      return;
    }

    addProduct(product);
    resetProduct();
  };

  return (
    <div
      id="create-product"
      className="flex flex-col items-center w-full py-16"
    >
      <div className="flex items-center justify-center p-4 bg-black/50 border-2 border-white/20 rounded-lg">
        <Image
          priority
          src="/icon.svg"
          width={24}
          height={24}
          className="h-[24px] w-auto"
          alt="icon"
        />
      </div>
      <form className="flex flex-col space-y-4 w-2/5 bg-black p-8 border-2 border-white/20 rounded-lg mt-8">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2 items-center">
            <PackagePlus size={24} />
            <h1 className="text-xl font-semibold">Cadastrar produto</h1>
          </div>
          <span className="opacity-60">
            Registre os produtos eletrônicos para a loja!
          </span>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Label className="text-base font-medium opacity-60">
            <Shapes size={20} />
            <span>Seção:</span>
          </Label>
          <Select
            onValueChange={(section) => {
              const newSection = Section[section as keyof typeof Section];
              setProduct((prev) => ({ ...prev, section: newSection }));
            }}
            value={product.section}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma seção..." />
            </SelectTrigger>
            <SelectContent className="dark">
              {Object.keys(Section).map((key) => {
                const value = Section[key as keyof typeof Section];
                return (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Label className="text-base font-medium opacity-60">
            <BadgeCheck size={20} />
            <span>Marca:</span>
          </Label>
          <Select
            onValueChange={(brand) => {
              const newBrand = Brand[brand as keyof typeof Brand];
              setProduct((prev) => ({ ...prev, brand: newBrand }));
            }}
            value={product.brand}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma marca..." />
            </SelectTrigger>
            <SelectContent className="dark">
              {Object.keys(Brand).map((key) => {
                const value = Brand[key as keyof typeof Brand];
                return (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="text-base font-medium opacity-60">
            <Type size={20} />
            <span>Nome:</span>
          </Label>
          <Input
            value={product.name}
            onChange={(e) => {
              const name = e.target.value;
              setProduct((prev) => ({ ...prev, name }));
            }}
            placeholder="Ex.: smartphone, notebook..."
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="text-base font-medium opacity-60">
            <CircleDollarSign size={20} />
            <span>Preço:</span>
          </Label>
          <Input
            type="number"
            value={product.price === 0 ? "" : product.price}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setProduct((prev) => ({ ...prev, price: 0 }));
                return;
              }

              const price = parseFloat(value);
              if (price < 0 || isNaN(price)) return;

              setProduct((prev) => ({ ...prev, price }));
            }}
            onBlur={() => {
              setProduct((prev) => ({
                ...prev,
                price: !prev.price ? 0 : prev.price,
              }));
            }}
            placeholder="Digite o preço do produto"
          />
        </div>
        <div className="flex flex-row w-full space-x-2 items-center justify-between p-2">
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-2">
              <RefreshCcw size={16} />
              <h3 className="text-base">Produto Usado</h3>
            </div>
            <span className="text-sm opacity-60">
              Marque esta opção se o produto cadastrado já foi utilizado
            </span>
          </div>
          <Switch
            checked={product.used}
            onCheckedChange={(checked) => {
              setProduct((prev) => ({ ...prev, used: checked }));
            }}
          />
        </div>
        <div className="flex w-full space-x-6 ">
          <Button
            type="reset"
            onClick={resetProduct}
            className="flex-1"
            variant="secondary"
          >
            <span>Limpar</span>
          </Button>
          <Button
            type="button"
            className="flex-2"
            onClick={() => handleSaveProduct(product)}
          >
            <ShoppingBasket />
            <span>Cadastrar Produto</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
