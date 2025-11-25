import Image from "next/image";

export default function Entrada() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mb-6">
          Entrada Blog
        </h1>
        <div className="flex justify-center items-center gap-4 text-gray-500 text-sm md:text-base">
          <p>
            Fecha:{" "}
            <span className="font-semibold text-black">
              24 de Noviembre de 2025
            </span>
          </p>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <p>
            Escrito por:{" "}
            <span className="font-semibold text-black">TiendaMuebles</span>
          </p>
        </div>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/img/aboutUs.jpg"
            alt="imagen blog"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-8 text-gray-600 leading-loose text-lg md:text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            id numquam ducimus alias commodi eveniet, impedit amet! Quidem et
            tempore obcaecati vitae voluptatibus ipsam? Quae repudiandae sequi
            quas numquam nam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            provident beatae fugiat laudantium possimus harum, magnam architecto
            soluta doloribus itaque dolores amet maiores pariatur ea quisquam
            voluptatem numquam? In, nobis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            provident beatae fugiat laudantium possimus harum, magnam architecto
            soluta doloribus itaque dolores amet maiores pariatur ea quisquam
            voluptatem numquam? In, nobis!
          </p>

          <h3 className="text-3xl font-[family-name:var(--font-playfair)] text-black mt-12 mb-6">
            Subtítulo de la sección
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            provident beatae fugiat laudantium possimus harum, magnam architecto
            soluta doloribus itaque dolores amet maiores pariatur ea quisquam
            voluptatem numquam? In, nobis!
          </p>

          <blockquote className="border-l-4 border-black pl-6 italic text-xl text-gray-800 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
            &quot;El diseño es el embajador silencioso de tu marca.&quot;
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            provident beatae fugiat laudantium possimus harum, magnam architecto
            soluta doloribus itaque dolores amet maiores pariatur ea quisquam
            voluptatem numquam? In, nobis!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            provident beatae fugiat laudantium possimus harum, magnam architecto
            soluta doloribus itaque dolores amet maiores pariatur ea quisquam
            voluptatem numquam? In, nobis!
          </p>
        </div>
      </article>
    </main>
  );
}
