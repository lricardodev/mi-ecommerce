import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <form className="max-w-2xl mx-auto space-y-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          Envíanos un mensaje
        </h3>
        <p className="text-gray-500">
          Estamos aquí para ayudarte con cualquier duda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50 focus:bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50 focus:bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="asunto" className="text-sm font-medium text-gray-700">
          Asunto
        </label>
        <input
          id="asunto"
          type="text"
          placeholder="¿En qué podemos ayudarte?"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50 focus:bg-white"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={6}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50 focus:bg-white resize-none"
        ></textarea>
      </div>

      <div className="pt-4">
        <Button className="w-full h-12 text-lg font-medium" size="lg">
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
}
