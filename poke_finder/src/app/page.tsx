import Image from "next/image";
import { PokeCard } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 py-20">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex space-x-8">
        <PokeCard/ >
        <PokeCard/ >
        <PokeCard/ >
      </div>
    </main>
  );
}
