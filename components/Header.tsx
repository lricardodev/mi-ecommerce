"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/store";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { items, removeItem } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <header
      className={`${
        isHome
          ? "fixed top-0 z-50 w-full bg-transparent border-none text-white transition-all duration-300"
          : "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground transition-all duration-300"
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${
                isHome ? "text-white hover:bg-white/20 hover:text-white" : ""
              }`}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menú</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-xl font-medium">
                Inicio
              </Link>
              <Link href="/#nosotros" className="text-xl font-medium">
                Nosotros
              </Link>
              <Link href="/tienda" className="text-xl font-medium">
                Tienda
              </Link>
              <Link href="/blog" className="text-xl font-medium">
                Blog
              </Link>
              <Link href="/galeria" className="text-xl font-medium">
                Galería
              </Link>
              <Link href="/contacto" className="text-xl font-medium">
                Contacto
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Tienda
            <span className={isHome ? "text-accent" : "text-primary"}>
              Muebles
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-6 font-medium ${
            isHome ? "text-xl" : "text-base"
          }`}
        >
          <Link
            href="/"
            className={`transition-colors ${
              isHome ? "hover:text-accent" : "hover:text-primary"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/#nosotros"
            className={`transition-colors ${
              isHome ? "hover:text-accent" : "hover:text-primary"
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="/tienda"
            className={`transition-colors ${
              isHome ? "hover:text-accent" : "hover:text-primary"
            }`}
          >
            Tienda
          </Link>
          <Link
            href="/blog"
            className={`transition-colors ${
              isHome ? "hover:text-accent" : "hover:text-primary"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/galeria"
            className={`transition-colors ${
              isHome ? "hover:text-accent" : "hover:text-primary"
            }`}
          >
            Galería
          </Link>
          <Link
            href="/contacto"
            className={`transition-colors ${
              isHome ? "hover:text-accent" : "hover:text-primary"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* <Button
            variant="ghost"
            size="icon"
            className={
              isHome ? "text-white hover:bg-white/20 hover:text-white" : ""
            }
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button> */}

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`relative ${
                  isHome ? "text-white hover:bg-white/20 hover:text-white" : ""
                }`}
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
                  >
                    {itemCount}
                  </Badge>
                )}
                <span className="sr-only">Carrito</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Carrito de Compras</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {items.length === 0 ? (
                  <p className="text-center text-muted-foreground">
                    Tu carrito está vacío.
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 max-h-[60vh] overflow-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="h-16 w-16 bg-muted rounded-md overflow-hidden relative">
                            {/* Placeholder for image, or use next/image if available in item */}
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {item.quantity} x ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-medium mb-4">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <Button className="w-full">Proceder al Pago</Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
