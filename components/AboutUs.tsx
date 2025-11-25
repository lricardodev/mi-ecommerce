import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-300 p-8 md:p-12 rounded-xl">
      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
        <Image
          src="/img/furniture-store.avif"
          alt="Imagen nosotros"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className=" flex flex-col gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            Nuestra Historia
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            debitis quis consectetur animi beatae mollitia itaque ea dicta eos.
            Totam repellat temporibus autem aspernatur necessitatibus
            perspiciatis ea iste laborum ipsum!
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            debitis quis consectetur animi beatae mollitia itaque ea dicta eos.
            Totam repellat temporibus autem aspernatur necessitatibus
            perspiciatis ea iste laborum ipsum!
          </p>
        </div>
      </div>
    </div>
  );
}
