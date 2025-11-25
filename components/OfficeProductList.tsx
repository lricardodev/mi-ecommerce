"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";

const officeProducts = [
  {
    id: 101,
    name: "Escritorio Ejecutivo",
    price: 3500.0,
    image: "/img/producto1.jpg",
    description: "Espacioso y elegante para tu oficina.",
  },
  {
    id: 102,
    name: "Silla Ergonómica Pro",
    price: 2800.0,
    image: "/img/producto2.jpg",
    description: "Máximo confort para largas jornadas.",
  },
  {
    id: 103,
    name: "Lámpara LED de Escritorio",
    price: 600.0,
    image: "/img/producto3.jpg",
    description: "Iluminación ajustable y cuidado visual.",
  },
  {
    id: 104,
    name: "Archivero Moderno",
    price: 1200.0,
    image: "/img/producto4.jpg",
    description: "Organización con estilo minimalista.",
  },
  {
    id: 105,
    name: "Set de Organizadores",
    price: 450.0,
    image: "/img/producto5.jpg",
    description: "Mantén tu espacio de trabajo ordenado.",
  },
  {
    id: 106,
    name: "Sillón de Visitas",
    price: 1800.0,
    image: "/img/producto6.jpg",
    description: "Recibe a tus clientes con comodidad.",
  },
];

export default function OfficeProductList() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-6xl font-bold tracking-tight mb-8 text-center font-[family-name:var(--font-playfair)]">
        Mobiliario de Oficina
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {officeProducts.map((product) => (
          <Card
            key={product.id}
            className="group border-none shadow-none bg-transparent"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-0 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                <p className="font-medium">${product.price.toFixed(2)}</p>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-4">
              <Button
                onClick={() => addItem(product)}
                className="w-full"
                variant="secondary"
              >
                Agregar al Carrito
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
