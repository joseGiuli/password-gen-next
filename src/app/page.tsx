import ThemeToggle from "@/components/layout/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="container">
        <h2 className="font-extrabold text-center">
          Gerador de senhas aleatórias
        </h2>
        <p className="">Escolha o tipo da senha</p>
        <div className="bg-gray-200 w-[300px] grid grid-cols-2">
          <div>
            <p>Aleatório</p>
          </div>
          <div>
            <p>PIN</p>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </main>
  );
}
