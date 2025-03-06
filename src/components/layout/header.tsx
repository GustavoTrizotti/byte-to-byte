import { Heart } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex items-center justify-between z-10">
      <div className="flex items-center space-x-2">
        <Image priority src="/logo.svg" width={24} height={24} alt="icon" />
        <h3 className="text-lg font-bold">Byte to Byte</h3>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <span className="hidden md:flex items-center gap-1 text-sm opacity-30">
          Feito com <Heart size={14} strokeWidth={3} /> por Gustavo Trizotti e
          Arthur Mascaro
        </span>
        <a href="https://github.com/GustavoTrizotti/byte-to-byte">
          <Image
            priority
            className="hover:opacity-80 transition-opacity cursor-pointer"
            src="/github.svg"
            width={24}
            height={24}
            alt="icon"
          />
        </a>
      </div>
    </nav>
  );
}
