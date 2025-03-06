import "./globals.css";

import { CreateProduct } from "@/components/create-product";
import { DottedContainer } from "@/components/layout/dotted-container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <div className="dark flex flex-col min-h-screen text-neutral-50 font-[family-name:var(--font-outfit)] overflow-auto">
      <DottedContainer className="flex flex-col items-center w-full">
        <Header />
        <Title />
        <CreateProduct />
      </DottedContainer>
      <Footer />
    </div>
  );
}
