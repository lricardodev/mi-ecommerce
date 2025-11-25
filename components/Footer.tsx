import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">TiendaMuebles</h3>
            <p className="text-sm text-muted-foreground">
              Diseño y calidad para tu hogar. Transformamos espacios en
              experiencias.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Cocina
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Oficina
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Jardín
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Dormitorios
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sobre Nosotros</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Nuestra Historia
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Carreras
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Términos del Servicio
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Preguntas Frecuentes
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Ayuda en línea
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} TiendaMuebles. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
