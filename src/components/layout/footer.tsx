import { DottedContainer } from "./dotted-container";

export function Footer() {
  return (
    <footer className="flex w-full">
      <DottedContainer showDotAnimation={false} className="flex flex-1 p-7">
        <span className="text-xs opacity-30 text-center">
          &copy; 2025 Byte to Byte. Todos os direitos reservados.
        </span>
      </DottedContainer>
    </footer>
  );
}
