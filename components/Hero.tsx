import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-[url('/img/background.jpg')] bg-cover bg-center"
          role="img"
          aria-label="Interior moderno"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="absolute top-1/4 left-10 md:left-20 z-10 hidden md:block animate-in fade-in slide-in-from-left-10 duration-1000 delay-300"></div>

      <div className="relative z-10 text-center text-white space-y-6 max-w-4xl px-4 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/img/lamp.png"
            alt="Lámpara de diseño"
            width={100}
            height={100}
            className="object-contain drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Diseño que Inspira
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
          Muebles modernos para espacios contemporáneos. Calidad y estética en
          cada detalle.
        </p>
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 h-auto"
          >
            <Link href="/tienda">Ver Colección</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
