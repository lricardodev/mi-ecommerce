import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Oficina", image: "/img/office.jpg", href: "/tienda/oficina" },
  { name: "Hogar", image: "/img/home1.jpg", href: "/tienda/oficina" },
  { name: "Cocina", image: "/img/kitchen.jpg", href: "/tienda/oficina" },
];

export default function CategoryList() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
        Categorías
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.name} href={category.href} className="group">
            <Card className="overflow-hidden border-none shadow-none relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold tracking-widest uppercase border-2 border-white px-6 py-2 transition-transform duration-300 group-hover:scale-110">
                  {category.name}
                </h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
