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

export function CreateProduct() {
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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma seção..." />
            </SelectTrigger>
            <SelectContent className="dark">
              <SelectItem value="computers">Computadores</SelectItem>
              <SelectItem value="accessories">Acessórios</SelectItem>
              <SelectItem value="printers">Impressoras</SelectItem>
              <SelectItem value="games">Games</SelectItem>
              <SelectItem value="gadgets">Gadgets</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <Label className="text-base font-medium opacity-60">
            <BadgeCheck size={20} />
            <span>Marca:</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma marca..." />
            </SelectTrigger>
            <SelectContent className="dark">
              <SelectItem value="computers">HP</SelectItem>
              <SelectItem value="accessories">Dell</SelectItem>
              <SelectItem value="printers">Positivo</SelectItem>
              <SelectItem value="games">Asus</SelectItem>
              <SelectItem value="gadgets">Sumsung</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="text-base font-medium opacity-60">
            <Type size={20} />
            <span>Nome:</span>
          </Label>
          <Input placeholder="Ex.: smartphone, notebook..." />
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="text-base font-medium opacity-60">
            <CircleDollarSign size={20} />
            <span>Preço:</span>
          </Label>
          <Input placeholder="Digite o preço do produto" />
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
          <Switch />
        </div>
        <div className="flex w-full space-x-6 ">
          <Button type="reset" className="flex-1" variant="secondary">
            <span>Limpar</span>
          </Button>
          <Button type="button" className="flex-2">
            <ShoppingBasket />
            <span>Cadastrar Produto</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
