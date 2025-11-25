import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Guía de Colores",
    date: "22 de Octubre de 2022",
    author: "TiendaMuebles",
    image: "/img/blog.jpg",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam ducimus alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae voluptatibus ipsam?",
  },
  {
    id: 2,
    title: "Nuevos Modelos 2024",
    date: "20 de Noviembre de 2023",
    author: "TiendaMuebles",
    image: "/img/blog.jpg",
    excerpt:
      "Descubre las nuevas tendencias en muebles para este año. Diseños minimalistas, materiales sostenibles y colores que transformarán tu hogar.",
  },
];

export default function Blog() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mt-12">
      <div className="flex flex-col gap-12">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="relative h-80 w-full overflow-hidden rounded-lg mb-6">
              <Image
                src={post.image}
                alt={`Imagen blog ${post.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <p>{post.date}</p>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <p>Por {post.author}</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-gray-900 group-hover:text-black transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                {post.excerpt}
              </p>

              <Link
                href="/entrada"
                className="inline-flex items-center gap-2 text-black font-semibold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all w-fit mt-2"
              >
                Leer Entrada
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <aside className="space-y-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-[family-name:var(--font-playfair)] mb-6 border-b border-gray-200 pb-4">
            Otras Entradas
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/entrada"
                className="text-gray-600 hover:text-black transition-colors block py-2 border-b border-gray-100 last:border-0"
              >
                Guía de Colores
              </Link>
            </li>
            <li>
              <Link
                href="/entrada"
                className="text-gray-600 hover:text-black transition-colors block py-2 border-b border-gray-100 last:border-0"
              >
                Nuevos Modelos
              </Link>
            </li>
            <li>
              <Link
                href="/entrada"
                className="text-gray-600 hover:text-black transition-colors block py-2 border-b border-gray-100 last:border-0"
              >
                Guía para diseño de interiores
              </Link>
            </li>
            <li>
              <Link
                href="/entrada"
                className="text-gray-600 hover:text-black transition-colors block py-2 border-b border-gray-100 last:border-0"
              >
                Guía para diseño de exteriores
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-[family-name:var(--font-playfair)] mb-4">
            Suscríbete
          </h3>
          <p className="text-gray-300 mb-6">
            Recibe las últimas noticias y tendencias en tu correo.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Tu Email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-white text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 px-4 rounded hover:bg-gray-100 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </aside>
    </section>
  );
}
