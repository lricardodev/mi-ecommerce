"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";

const products = [
  {
    id: 1,
    name: "Silla Lounge Minimalista",
    price: 1200.0,
    image: "/img/producto1.jpg",
    description: "Diseño ergonómico con acabados premium.",
  },
  {
    id: 2,
    name: "Mesa de Centro",
    price: 850.0,
    image: "/img/producto2.jpg",
    description: "Madera de roble sostenible.",
  },
  {
    id: 3,
    name: "Sofá Modular",
    price: 2500.0,
    image: "/img/producto3.jpg",
    description: "Configurable y tapizado en lino.",
  },
  {
    id: 4,
    name: "Lámpara de Pie",
    price: 400.0,
    image: "/img/producto4.jpg",
    description: "Iluminación cálida para ambientes relajados.",
  },
  {
    id: 5,
    name: "Estantería Flotante",
    price: 600.0,
    image: "/img/producto5.jpg",
    description: "Minimalismo funcional para tu pared.",
  },
  {
    id: 6,
    name: "Sillón de Lectura",
    price: 1100.0,
    image: "/img/producto6.jpg",
    description: "Confort absoluto en diseño compacto.",
  },
];

export default function ProductList() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-6xl font-bold tracking-tight mb-8 text-center">
        Nuestra Colección
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
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
