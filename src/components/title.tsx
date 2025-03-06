import { Package, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";

export function Title() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8">
      <div>
        <Image
          priority
          src="/icon.svg"
          width={400}
          height={100}
          className="hover:scale-105 transition-transform"
          alt="icon"
        />
        <h1 className="text-xl text-center opacity-60 font-semibold mt-4">
          Bem vindo à Byte to Byte!
        </h1>
      </div>
      <div className="flex flex-row space-x-4">
        <a
          href="#product-list"
          className="flex flex-row items-center space-x-2 p-3 bg-white/60 rounded-lg border-2 opacity-80 border-white/20 hover:opacity-100 transition-opacity"
        >
          <ShoppingBag size={24} color="#000" />
          <span className="text-black">Ver Produtos</span>
        </a>
        <a
          href="#create-product"
          className="flex flex-row items-center space-x-2 p-3 bg-black/30 rounded-lg border-2 opacity-80 border-white/20 hover:opacity-100 transition-opacity"
        >
          <Package size={24} />
          <span>Cadastrar Produto</span>
        </a>
      </div>
    </div>
  );
}
