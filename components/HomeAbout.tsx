import Image from "next/image";

export default function HomeAbout() {
  return (
    <section id="nosotros" className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-300 p-8 md:p-12 rounded-xl">
        <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/img/furniture-store.avif"
            alt="Sobre Nosotros"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Creemos que el diseño debe ser funcional y estético. Nuestra misión
            es transformar espacios con muebles que cuentan historias y perduran
            en el tiempo.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada pieza es seleccionada cuidadosamente para ofrecer la mejor
            calidad y un estilo inigualable.
          </p>
        </div>
      </div>
    </section>
  );
}
